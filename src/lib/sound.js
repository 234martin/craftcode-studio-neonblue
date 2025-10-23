export function playHoverSound(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = 'sine'
    o.frequency.setValueAtTime(880, ctx.currentTime)
    g.gain.setValueAtTime(0.0025, ctx.currentTime)
    o.connect(g); g.connect(ctx.destination)
    o.start()
    g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.12)
    o.stop(ctx.currentTime + 0.13)
  }catch(e){
    // audio not supported or user blocked — ignore silently
  }
}
