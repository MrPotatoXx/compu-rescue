import { getDiagnosis } from '@/lib/ai-diagnostico';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { type, details, problemDescription } = await req.json();

  const context = {
    type,
    ...details,
    problemDescription
  };

  const result = await getDiagnosis(context);

  return new Response(result.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}
