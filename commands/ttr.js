exports.run = (client, message) => {
  var t = Date.parse("Mar 11 2017 02:00");
  var x = Date.now()
  var tt = (t-x)

function dhm(t){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  return [d, pad(h), pad(m)].join(':');
}

console.log( dhm( tt ) );
  message.channel.sendEmbed({color: 0xDF9900,description:(`The time til reset is \*\*${dhm(tt)}\*\*\`days\`\: \`hours\`\: \`mins\``)});
};