[Panel]
策略面板 = script-name=网上国网,update-interval=7200
[Script]
网上国网 = type=cron,cronexp=0 5 21 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/95598/95598.js,timeout=60
