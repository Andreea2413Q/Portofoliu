// components/OrbitalRings.tsx
export default function OrbitalRings() {
  const ringSizes = [300, 360, 440];
  const orbitDuration = [6, 9, 12];
  const dotSizes = [8, 10, 12];
  const colors = ['rgb(255,180,0)', 'rgb(0,200,255)', 'rgb(50,255,50)'];

  return (
    <div className="relative w-[440px] h-[440px] ">
      {/* Poza în centru */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden z-10 border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        <img src="/eu1.jpeg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Inele orbitale */}
      {ringSizes.map((size, index) => (
        <div key={index}>
          {/* Ring complet */}
          <div
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: colors[index],
              opacity: 0.4 - index * 0.1,
               boxShadow: `0 0 ${8 + index * 4}px ${colors[index]}`,
filter: `drop-shadow(0 0 ${4 + index * 2}px ${colors[index]})`,

            }}
          />

          {/* Punct care orbitează */}
          <div
            className="absolute"
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `orbit${index} ${orbitDuration[index]}s linear infinite`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: dotSizes[index],
                height: dotSizes[index],
                background: `linear-gradient(135deg, ${colors[index]}, white)`,
                boxShadow: `0 0 ${10 + index * 5}px ${colors[index]}`,
                left: '50%',
                top: '0',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes orbit0 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit1 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}