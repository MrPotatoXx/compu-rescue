import { getDiagnosis } from '@/lib/ai-diagnostico';

export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();
  const result = await getDiagnosis(context);

  return new Response(result.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}
