import md5 from "md5";

export async function GET(req) {
  const url = new URL(req.url);
  const param = new URLSearchParams(url.search);
  const offset = param.get("offset");

  const baseUrl = process.env.BASE_URL;
  const apiKeyPublic = process.env.MARVEL_PUBLIC_KEY;
  const apiKeyPrivate = process.env.MARVEL_PRIVATE_KEY;
  const ts = Date.now();

  const params = new URLSearchParams({
    ts: ts,
    apikey: apiKeyPublic,
    hash: md5(ts + apiKeyPrivate + apiKeyPublic),
  });

  const res = await fetch(
    `${baseUrl}/comics?${params}&offset=${offset}&limit=10`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const fetched = await res.json();
  const data = fetched.data;
  return Response.json({ data });
}
