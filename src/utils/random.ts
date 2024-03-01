// File: utils/randomUtils.ts

export function randomDate(): Date {
  // Lấy ngày hiện tại
  const currentDate = new Date();

  // Sinh ngẫu nhiên một số nguyên trong khoảng từ 0 đến 365 (hoặc bất kỳ khoảng thời gian nào khác)
  const randomDays = Math.floor(Math.random() * 365);

  // Tính toán ngày ngẫu nhiên bằng cách trừ randomDays từ ngày hiện tại
  const randomDate = new Date(
    currentDate.getTime() - randomDays * 24 * 60 * 60 * 1000
  );

  return randomDate;
}

export function randomID(length: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
