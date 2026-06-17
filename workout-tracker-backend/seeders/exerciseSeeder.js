const db = require('../config/db')

const initialExercises = [
  ['Bench Press', 'Barbell chest press on a flat bench', 'Strength', 'Chest'],
  ['Squat', 'Barbell back squat for lower body development', 'Strength', 'Legs'],
  ['Running', 'Treadmill or outdoor steady-state cardio', 'Cardio', 'Full Body'],
  ['Pull-ups', 'Bodyweight or weighted upper body pull', 'Strength', 'Back']
];

const seedDB = async()=>{
    try{
        console.log('Seeding exercises...');

        for(const exercise of initialExercises){
            const exists = await db.query('SELECT id FROM exercises WHERE name = $1', [exercise[0]]);

            if(exists.rows.length === 0){
                await db.query('INSERT INTO exercises (name,description, category, muscle_group) VALUES ($1,$2,$3,$4)',exercise);
                console.log(`Inserted exercise: ${exercise[0]}`);
            }

    }
    console.log('Database successfully seeded!');
    process.exit(0);
    }catch(err){
        console.error('Error seeding exercises:', err);
        process.exit(1);
    }
}

seedDB();