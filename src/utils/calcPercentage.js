export function calcPercentage({ completed, total }) {
  return completed && Math.round((100 * completed) / total);
}
