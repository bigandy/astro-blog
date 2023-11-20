// Outputs: /builtwith.json
export async function GET() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const dateDifference: number =
    (currentDate as unknown as number) - (startDate as unknown as number);
  const days = Math.floor(dateDifference / (24 * 60 * 60 * 1000));

  const weekNumber = Math.ceil(days / 7);
  return new Response(
    JSON.stringify({
      weekNumber,
    })
  );
}
