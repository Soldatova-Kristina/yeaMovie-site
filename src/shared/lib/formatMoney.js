export function formatMoney(data) {
  if (!data || data.value == null) return "нет данных";
  return `${data.value.toLocaleString("ru-RU")} ${data.currency || ""}`.trim();
}