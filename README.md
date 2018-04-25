# nem-ifttt

勉強中・・・

完成にはまだまだ

herokuで動きます

nemのアドレスを監視して、unconfirmedTransactionとquantityの変化を検知します。

検知したら、IFTTTにwebhookします。

```
git clone https://github.com/planethouki/nem-ifttt.git
cd nem-ifttt
heroku create your-nem-ifttt
git push -u heroku master
```

### env

`heroku local web`するには、`.env`ファイルが必要。

```
IFTTT_KEY=<your_ifttt_webhook_key>
IFTTT_EVENT_NAME=<your_ifttt_event_name>
NEM_ADDRESS=<your_nem_address>
```

heroku上で、↑の変数を設定する必要があります。
