import fs from 'fs'; /*módulo para leitura de arquivo*/
import path from 'path'; /* para fazer o caminho relativo do arquivo */
import { Pool } from 'mysql2/promise'; /* para conexão */
import connection from './connection'; /*conexão com o db*/

export function readQueries(filePath = 'createDatabase.sql') {
    const importPath = path.resolve(__dirname, filePath);
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    return queries;
  }
  export async function executeQueries(
    conn: Pool,
    queries = readQueries()
  ) {
    try {
      for (let i = 0; i < queries.length; i += 1) {
        const query = queries[ i ];
        await conn.query(query);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Banco Falha em executar queries', error);
    }
  }
  if (require.main === module) {
    executeQueries(connection)
      .then(async () => {
        // eslint-disable-next-line no-console
        console.info('Queries executadas com sucesso');
        await connection.end();
        process.exit(0);
      });
  }