export const prettyDate = (time) => {
  const date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " "));
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const dayDiff = Math.floor(diff / 86400);
  return (
    (dayDiff === 0 &&
      ((diff < 60 && "Vừa xong") ||
        (diff < 3600 && `${Math.floor(diff / 60)} phút trước`) ||
        (diff < 7200 && "1 giờ trước") ||
        (diff < 86400 && `${Math.floor(diff / 3600)} giờ trước`))) ||
    (dayDiff === 1 && "Hôm qua") ||
    (dayDiff < 7 && `${dayDiff} ngày trước`) ||
    (dayDiff < 31 && `${Math.ceil(dayDiff / 7)} tuần trước`) ||
    (dayDiff <= 366 && `${Math.ceil(dayDiff / 31)} tháng trước`) ||
    (dayDiff > 366 && `${Math.ceil(dayDiff / 366) - 1} năm trước`)
  );
};
