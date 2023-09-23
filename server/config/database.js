import pg from 'pg'

// PostGresSQL Database configuration
const config={
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

// Export database connection
export const pool=new pg.Pool(config)