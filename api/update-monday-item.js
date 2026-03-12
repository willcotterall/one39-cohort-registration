async function getOrCreateGroup(coachName) {
  const query = `
    query {
      boards(ids: [${process.env.MONDAY_BOARD_ID}]) {
        groups { id title }
      }
    }
  `;

  const res = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.MONDAY_API_KEY,
      'API-Version': '2024-01',
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  const groups = data.data.boards[0].groups;
  const match = groups.find(g => g.title.toLowerCase() === coachName.toLowerCase());

  if (match) return match.id;

  const createGroup = `
    mutation {
      create_group(board_id: ${process.env.MONDAY_BOARD_ID}, group_name: "${coachName}") {
        id
      }
    }
  `;

  const createRes = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.MONDAY_API_KEY,
      'API-Version': '2024-01',
    },
    body: JSON.stringify({ query: createGroup }),
  });

  const createData = await createRes.json();
  return createData.data.create_group.id;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { mondayItemId, email, coach, churchName, position } = req.body;

  if (!mondayItemId || !email || !coach) {
    return res.status(400).json({ error: 'mondayItemId, email, and coach are required' });
  }

  try {
    // Update columns with Step 2 data
    const columnValues = {
      "email_mm0pqws": { "email": email, "text": email },
      "text_mm0zpx5": churchName || '',
      "text_mm133myq": coach,
    };

    const updateMutation = `
      mutation {
        change_multiple_column_values(
          board_id: ${process.env.MONDAY_BOARD_ID},
          item_id: ${mondayItemId},
          column_values: ${JSON.stringify(JSON.stringify(columnValues))}
        ) {
          id
        }
      }
    `;

    const updateRes = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.MONDAY_API_KEY,
        'API-Version': '2024-01',
      },
      body: JSON.stringify({ query: updateMutation }),
    });

    const updateData = await updateRes.json();
    if (updateData.errors) {
      console.error('❌ Monday.com update error:', JSON.stringify(updateData.errors));
      return res.status(500).json({ error: 'Failed to update Monday.com item' });
    }

    // Move item to coach's group
    const groupId = await getOrCreateGroup(coach);

    const moveMutation = `
      mutation {
        move_item_to_group(
          item_id: ${mondayItemId},
          group_id: "${groupId}"
        ) {
          id
        }
      }
    `;

    const moveRes = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.MONDAY_API_KEY,
        'API-Version': '2024-01',
      },
      body: JSON.stringify({ query: moveMutation }),
    });

    const moveData = await moveRes.json();
    if (moveData.errors) {
      console.error('❌ Monday.com move error:', JSON.stringify(moveData.errors));
      return res.status(500).json({ error: 'Failed to move Monday.com item' });
    }

    console.log('✅ Monday.com item updated and moved to coach group:', mondayItemId);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Monday.com update error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
