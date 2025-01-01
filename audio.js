const eqVals = [32, 64, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3];
let nodes = []
  , streams = []
  , ctxs = []
  , sources = [];
window.addEventListener("set-gain", (e => {
    if (1 === e.detail.gain) {
        for (let e = 0; e < streams.length; e++)
            streams[e].gainNode.disconnect();
        for (let e = 0; e < nodes.length; e++)
            nodes[e].setAttribute("stream-captured", "false");
        streams = []
    } else {
        for (let t = 0; t < nodes.length; t++)
            captureStream(nodes[t], e.detail.gain, e.detail.filters);
        streams.forEach((t => {
            if (t.gainNode.gain.value = e.detail.gain,
            1 === e.detail.gain)
                for (let e = 0; e < t.streamFilters.length; e++)
                    t.streamFilters[e].gain.value = 0;
            else if (e.detail.filters)
                for (let a = 0; a < t.streamFilters.length; a++)
                    t.streamFilters[a].gain.value = e.detail.filters[a]
        }
        ))
    }
}
));
let captureStream = (e, t, a) => {
    if ("true" === e.getAttribute("stream-captured"))
        return;
    if (e.paused) {
        let t = () => {
            this.captureStream(e),
            e.removeEventListener("play", t)
        }
        ;
        return void e.addEventListener("play", t)
    }
    let r = ctxs[0]
      , s = sources[0];
    try {
        e.captureStream()
    } catch (e) {
        return
    }
    let n = r.createGain()
      , i = [];
    for (let e = 0; e < eqVals.length; e++)
        i[e] = r.createBiquadFilter(),
        i[e].type = "peaking",
        i[e].frequency.value = eqVals[e],
        i[e].Q.value = 5,
        1 === this.gain ? i[e].gain.value = 0 : i[e].gain.value = a[e],
        0 === e ? s.connect(i[e]) : i[e - 1].connect(i[e]),
        e === eqVals.length - 1 && i[e].connect(n);
    n.connect(r.destination),
    n.gain.value = t,
    streams.push({
        audioContext: r,
        gainNode: n,
        streamFilters: i
    }),
    e.setAttribute("stream-captured", "true")
}
;
!function() {
    let e = AudioContext.prototype
      , t = e.createMediaElementSource;
    e.createMediaElementSource = function() {
        ctxs.push(this);
        let e = t.apply(this, arguments);
        return sources.push(e),
        e
    }
}(AudioContext),
function() {
    let e = Audio.prototype
      , t = e.play;
    e.play = function() {
        return nodes.push(this),
        t.apply(this, arguments)
    }
}(Audio);