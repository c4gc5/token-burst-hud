(function () {
  if (window.TokenBurstHUD) return;
  const css = `.tbh{position:fixed;right:18px;bottom:18px;z-index:2147483647;font-family:Segoe UI,Arial;color:#eaffff}.tbh-p{padding:12px 14px;border:1px solid #5ff5ff;background:linear-gradient(135deg,rgba(8,16,28,.9),rgba(40,8,50,.86));box-shadow:0 0 28px rgba(95,245,255,.35);border-radius:14px}.tbh-t{font-size:24px;font-weight:900;text-shadow:0 0 16px #5ff5ff}.tbh-x{position:absolute;right:0;bottom:72px;width:220px;padding:14px;border:1px solid #ff47d4;border-radius:14px;background:linear-gradient(135deg,rgba(8,16,28,.96),rgba(48,8,58,.92));box-shadow:0 0 32px rgba(255,71,212,.35);animation:a .22s ease-out,b .35s ease-in forwards 2.3s}.tbh-b{font-size:32px;font-weight:900;text-shadow:0 0 18px #5ff5ff,0 0 28px #ff47d4}@keyframes a{from{opacity:0;transform:translateY(18px) scale(.92)}to{opacity:1}}@keyframes b{to{opacity:0;transform:translateY(-12px) scale(.96)}}`;
  const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  const root = document.createElement("div"); root.className = "tbh"; root.innerHTML = '<div class="tbh-p"><div>Token Burst</div><div class="tbh-t">0</div></div>'; document.body.appendChild(root);
  let total = 0; const totalEl = root.querySelector(".tbh-t");
  function n(v){ return Math.max(0, Math.round(Number(v) || 0)); }
  function record(u, meta){
    const prompt = n(u.prompt_tokens || u.input_tokens || 0);
    const completion = n(u.completion_tokens || u.output_tokens || 0);
    const t = n(u.total_tokens || prompt + completion);
    total += t; totalEl.textContent = total.toLocaleString();
    const x = document.createElement("div"); x.className = "tbh-x";
    x.innerHTML = '<div>' + ((meta && meta.estimated) ? 'Estimated Usage' : 'Token Usage') + '</div><div class="tbh-b">+' + t.toLocaleString() + '</div><div>Prompt ' + prompt + ' / Output ' + completion + '</div><div>' + ((meta && meta.model) || 'codex++') + '</div>';
    root.appendChild(x); setTimeout(() => x.remove(), 2800);
  }
  window.TokenBurstHUD = { record };
})();
