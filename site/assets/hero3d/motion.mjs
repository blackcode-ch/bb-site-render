export const PERIOD = 24000;
export const IDLE_RESUME = 4000;
const ease = x => .5 - .5 * Math.cos(Math.PI * Math.max(0, Math.min(1, x)));
export function poseAt(milliseconds) {
  const t = ((milliseconds % PERIOD) + PERIOD) % PERIOD;
  const open = t < 3000 ? 0 : t < 7000 ? ease((t - 3000) / 4000) : t < 17000 ? 1 : t < 21000 ? 1 - ease((t - 17000) / 4000) : 0;
  const index = t >= 7000 && t < 17000 ? Math.min(3, Math.floor((t - 7000) / 2500)) : -1;
  const local = index < 0 ? 0 : (t - 7000 - index * 2500);
  const opacity = index < 0 ? 0 : Math.min(ease(local / 250), ease((2500 - local) / 250));
  return { open, label: index, opacity, yaw: -.35 + milliseconds * .00007 };
}
export const words = {
  fr: { labels:['le boîtier','refroidissement silencieux','la puce IA, sur place',"traitement dans l’étude"], pause:'Mettre la rotation en pause', resume:'Reprendre la rotation', hint:'Glissez pour explorer', keyboard:'Box 3D. Flèches pour tourner ; reprise automatique après quatre secondes. Utilisez le bouton pour suspendre la rotation.' },
  de: { labels:['das Gehäuse','leise Kühlung','der KI-Chip, vor Ort','Verarbeitung in der Kanzlei'], pause:'Rotation pausieren', resume:'Rotation fortsetzen', hint:'Zum Erkunden ziehen', keyboard:'3D-Box. Mit den Pfeiltasten drehen; automatische Fortsetzung nach vier Sekunden. Die Schaltfläche pausiert die Rotation.' },
  en: { labels:['the enclosure','quiet cooling','the AI chip, on site','processing in the firm'], pause:'Pause rotation', resume:'Resume rotation', hint:'Drag to explore', keyboard:'3D box. Arrow keys rotate; automatic motion resumes after four seconds. Use the button to pause rotation.' }
};
