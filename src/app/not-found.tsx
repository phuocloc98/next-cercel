import { headers } from 'next/headers';
import Link from 'next/link';

import { isbot } from 'isbot';
export default async function NotFound() {
  const headersList = headers();

  const bot = headersList.get('user-agent');
  console.log('==========+++++', { user: bot, is: isbot(bot) });

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
