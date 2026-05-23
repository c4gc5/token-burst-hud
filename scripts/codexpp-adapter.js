(function () {
  var host = window.codexpp || window.codex;
  host && host.on && host.on("token_usage", function (usage) {
    window.TokenBurstHUD && window.TokenBurstHUD.record(usage, { source: "codex++" });
  });
})();
