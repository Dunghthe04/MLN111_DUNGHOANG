export default function Footer() {
  return (
    <footer className="bg-[#F5E6C8]/90 text-stone-500 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-red-800/15 text-xs">
      <div className="flex flex-wrap gap-2 items-center">
        <span>Tác phẩm bởi Nhóm 2 (Dev by: Hoàng Tuấn Dũng - HE182368)</span>
      </div>

      <p className="flex items-center gap-1.5 text-stone-400">
        Bấm giữ 
        <kbd className="px-1.5 py-0.5 text-[10px] text-white font-bold bg-red-700 rounded shadow-sm">Shift</kbd>
        + gõ lần lượt
        {['D', 'U', 'N', 'G'].map((key, i) => (
          <kbd key={i} className="px-1.5 py-0.5 text-[10px] text-white font-bold bg-red-700 rounded shadow-sm">
            {key}
          </kbd>
        ))}
        để mở bất ngờ
      </p>
    </footer>
  );
}
