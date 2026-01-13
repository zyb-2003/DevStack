export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter((input) => Boolean(input)).join(" ");
}