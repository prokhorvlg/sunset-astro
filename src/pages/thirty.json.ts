export async function get({ params }) {
  return new Response(JSON.stringify("nice!"), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
