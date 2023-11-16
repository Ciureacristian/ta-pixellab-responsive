export async function POST(req, res) {
  const body = await req.json();
  const { email } = body;
  console.log(email);
  return Response.json({
    hello: 'world',
  });
}

export async function GET() {
  return Response.json({
    hello: 'world',
  });
}
