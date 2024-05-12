import md5 from "md5";

export async function GET(req, { params }) {
  const baseUrl = process.env.BASE_URL;
  const apiKeyPublic = process.env.MARVEL_PUBLIC_KEY;
  const apiKeyPrivate = process.env.MARVEL_PRIVATE_KEY;
  const ts = Date.now();

  const param = new URLSearchParams({
    ts: ts,
    apikey: apiKeyPublic,
    hash: md5(ts + apiKeyPrivate + apiKeyPublic),
  });

  const res = await fetch(`${baseUrl}/series/${params.id}?${param}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const fetched = await res.json();
  const data = fetched.data;
  return Response.json({ data });
}
