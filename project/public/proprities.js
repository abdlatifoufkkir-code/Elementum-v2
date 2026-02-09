const allProperties = {
  1: [ // Hydrogen
    { title: "Electron Config", value: "1s¹" },
    { title: "Density", value: "0.00008988 g/cm³" },
    { title: "Melting Point", value: "-259.14°C" },
    { title: "Boiling Point", value: "-252.87°C" },
    { title: "Price", value: "≈ $1.39/kg" },
    { title: "Discovered", value: "Henry Cavendish (1766)" }
  ],
  2: [ // Helium
    { title: "Electron Config", value: "1s²" },
    { title: "Density", value: "0.0001785 g/cm³" },
    { title: "Melting Point", value: "-272.2°C" },
    { title: "Boiling Point", value: "-268.93°C" },
    { title: "Price", value: "≈ $5.20/kg" },
    { title: "Discovered", value: "Pierre Janssen & Norman Lockyer (1868)" }
  ],
  3: [ // Lithium
    { title: "Electron Config", value: "[He] 2s¹" },
    { title: "Density", value: "0.534 g/cm³" },
    { title: "Melting Point", value: "180.54°C" },
    { title: "Boiling Point", value: "1342°C" },
    { title: "Price", value: "≈ $27/kg" },
    { title: "Discovered", value: "Johan August Arfwedson (1817)" }
  ],
  4: [ // Beryllium
    { title: "Electron Config", value: "[He] 2s²" },
    { title: "Density", value: "1.85 g/cm³" },
    { title: "Melting Point", value: "1287°C" },
    { title: "Boiling Point", value: "2469°C" },
    { title: "Price", value: "≈ $850/kg" },
    { title: "Discovered", value: "Louis-Nicolas Vauquelin (1798)" }
  ],
  5: [ // Boron
    { title: "Electron Config", value: "[He] 2s² 2p¹" },
    { title: "Density", value: "2.34 g/cm³" },
    { title: "Melting Point", value: "2075°C" },
    { title: "Boiling Point", value: "4000°C" },
    { title: "Price", value: "≈ $5/g" },
    { title: "Discovered", value: "Joseph Louis Gay-Lussac & Louis Jacques Thénard (1808)" }
  ],
  6: [ // Carbon
    { title: "Electron Config", value: "[He] 2s² 2p²" },
    { title: "Density", value: "2.267 g/cm³" },
    { title: "Melting Point", value: "3550°C" },
    { title: "Boiling Point", value: "4827°C" },
    { title: "Price", value: "≈ $24/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  7: [ // Nitrogen
    { title: "Electron Config", value: "[He] 2s² 2p³" },
    { title: "Density", value: "0.0012506 g/cm³" },
    { title: "Melting Point", value: "-210.0°C" },
    { title: "Boiling Point", value: "-195.79°C" },
    { title: "Price", value: "≈ $0.4/kg" },
    { title: "Discovered", value: "Daniel Rutherford (1772)" }
  ],
  8: [ // Oxygen
    { title: "Electron Config", value: "[He] 2s² 2p⁴" },
    { title: "Density", value: "0.001429 g/cm³" },
    { title: "Melting Point", value: "-218.79°C" },
    { title: "Boiling Point", value: "-182.95°C" },
    { title: "Price", value: "≈ $0.3/kg" },
    { title: "Discovered", value: "Joseph Priestley & Carl Wilhelm Scheele (1774)" }
  ],
  9: [ // Fluorine
    { title: "Electron Config", value: "[He] 2s² 2p⁵" },
    { title: "Density", value: "0.001696 g/cm³" },
    { title: "Melting Point", value: "-219.67°C" },
    { title: "Boiling Point", value: "-188.12°C" },
    { title: "Price", value: "≈ $190/kg" },
    { title: "Discovered", value: "Henri Moissan (1886)" }
  ],
  10: [ // Neon
    { title: "Electron Config", value: "[He] 2s² 2p⁶" },
    { title: "Density", value: "0.0008999 g/cm³" },
    { title: "Melting Point", value: "-248.59°C" },
    { title: "Boiling Point", value: "-246.08°C" },
    { title: "Price", value: "≈ $33/kg" },
    { title: "Discovered", value: "William Ramsay & Morris Travers (1898)" }
  ],
  11: [ // Sodium
    { title: "Electron Config", value: "[Ne] 3s¹" },
    { title: "Density", value: "0.971 g/cm³" },
    { title: "Melting Point", value: "97.72°C" },
    { title: "Boiling Point", value: "883°C" },
    { title: "Price", value: "≈ $25/kg" },
    { title: "Discovered", value: "Humphry Davy (1807)" }
  ],
  12: [ // Magnesium
    { title: "Electron Config", value: "[Ne] 3s²" },
    { title: "Density", value: "1.738 g/cm³" },
    { title: "Melting Point", value: "650°C" },
    { title: "Boiling Point", value: "1090°C" },
    { title: "Price", value: "≈ $3.7/kg" },
    { title: "Discovered", value: "Joseph Black (1755)" }
  ],
  13: [ // Aluminum
    { title: "Electron Config", value: "[Ne] 3s² 3p¹" },
    { title: "Density", value: "2.698 g/cm³" },
    { title: "Melting Point", value: "660.32°C" },
    { title: "Boiling Point", value: "2519°C" },
    { title: "Price", value: "≈ $2.1/kg" },
    { title: "Discovered", value: "Hans Christian Ørsted (1825)" }
  ],
  14: [ // Silicon
    { title: "Electron Config", value: "[Ne] 3s² 3p²" },
    { title: "Density", value: "2.3296 g/cm³" },
    { title: "Melting Point", value: "1414°C" },
    { title: "Boiling Point", value: "3265°C" },
    { title: "Price", value: "≈ $0.5/kg" },
    { title: "Discovered", value: "Jöns Jakob Berzelius (1824)" }
  ],
  15: [ // Phosphorus
    { title: "Electron Config", value: "[Ne] 3s² 3p³" },
    { title: "Density", value: "1.82 g/cm³" },
    { title: "Melting Point", value: "44.15°C" },
    { title: "Boiling Point", value: "280.5°C" },
    { title: "Price", value: "≈ $30/kg" },
    { title: "Discovered", value: "Hennig Brand (1669)" }
  ],
  16: [ // Sulfur
    { title: "Electron Config", value: "[Ne] 3s² 3p⁴" },
    { title: "Density", value: "2.067 g/cm³" },
    { title: "Melting Point", value: "115.21°C" },
    { title: "Boiling Point", value: "444.6°C" },
    { title: "Price", value: "≈ $0.1/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  17: [ // Chlorine
    { title: "Electron Config", value: "[Ne] 3s² 3p⁵" },
    { title: "Density", value: "0.003214 g/cm³" },
    { title: "Melting Point", value: "-101.5°C" },
    { title: "Boiling Point", value: "-34.04°C" },
    { title: "Price", value: "≈ $0.15/kg" },
    { title: "Discovered", value: "Carl Wilhelm Scheele (1774)" }
  ],
  18: [ // Argon
    { title: "Electron Config", value: "[Ne] 3s² 3p⁶" },
    { title: "Density", value: "0.0017837 g/cm³" },
    { title: "Melting Point", value: "-189.35°C" },
    { title: "Boiling Point", value: "-185.85°C" },
    { title: "Price", value: "≈ $0.5/kg" },
    { title: "Discovered", value: "Lord Rayleigh & William Ramsay (1894)" }
  ],
  19: [ // Potassium
    { title: "Electron Config", value: "[Ar] 4s¹" },
    { title: "Density", value: "0.862 g/cm³" },
    { title: "Melting Point", value: "63.38°C" },
    { title: "Boiling Point", value: "759°C" },
    { title: "Price", value: "≈ $100/kg" },
    { title: "Discovered", value: "Humphry Davy (1807)" }
  ],
  20: [ // Calcium
    { title: "Electron Config", value: "[Ar] 4s²" },
    { title: "Density", value: "1.54 g/cm³" },
    { title: "Melting Point", value: "842°C" },
    { title: "Boiling Point", value: "1484°C" },
    { title: "Price", value: "≈ $20/kg" },
    { title: "Discovered", value: "Humphry Davy (1808)" }
  ],
  21: [ // Scandium
    { title: "Electron Config", value: "[Ar] 3d¹ 4s²" },
    { title: "Density", value: "2.989 g/cm³" },
    { title: "Melting Point", value: "1541°C" },
    { title: "Boiling Point", value: "2830°C" },
    { title: "Price", value: "≈ $270/g" },
    { title: "Discovered", value: "Lars Fredrik Nilson (1879)" }
  ],
  22: [ // Titanium
    { title: "Electron Config", value: "[Ar] 3d² 4s²" },
    { title: "Density", value: "4.54 g/cm³" },
    { title: "Melting Point", value: "1668°C" },
    { title: "Boiling Point", value: "3287°C" },
    { title: "Price", value: "≈ $6.6/kg" },
    { title: "Discovered", value: "William Gregor (1791)" }
  ],
  23: [ // Vanadium
    { title: "Electron Config", value: "[Ar] 3d³ 4s²" },
    { title: "Density", value: "6.11 g/cm³" },
    { title: "Melting Point", value: "1910°C" },
    { title: "Boiling Point", value: "3407°C" },
    { title: "Price", value: "≈ $25/kg" },
    { title: "Discovered", value: "Andrés Manuel del Río (1801)" }
  ],
  24: [ // Chromium
    { title: "Electron Config", value: "[Ar] 3d⁵ 4s¹" },
    { title: "Density", value: "7.15 g/cm³" },
    { title: "Melting Point", value: "1907°C" },
    { title: "Boiling Point", value: "2671°C" },
    { title: "Price", value: "≈ $10/kg" },
    { title: "Discovered", value: "Louis-Nicolas Vauquelin (1797)" }
  ],
  25: [ // Manganese
    { title: "Electron Config", value: "[Ar] 3d⁵ 4s²" },
    { title: "Density", value: "7.44 g/cm³" },
    { title: "Melting Point", value: "1246°C" },
    { title: "Boiling Point", value: "2061°C" },
    { title: "Price", value: "≈ $2.8/kg" },
    { title: "Discovered", value: "Johan Gottlieb Gahn (1774)" }
  ],
  26: [ // Iron
    { title: "Electron Config", value: "[Ar] 3d⁶ 4s²" },
    { title: "Density", value: "7.874 g/cm³" },
    { title: "Melting Point", value: "1538°C" },
    { title: "Boiling Point", value: "2862°C" },
    { title: "Price", value: "≈ $0.1/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  27: [ // Cobalt
    { title: "Electron Config", value: "[Ar] 3d⁷ 4s²" },
    { title: "Density", value: "8.86 g/cm³" },
    { title: "Melting Point", value: "1495°C" },
    { title: "Boiling Point", value: "2927°C" },
    { title: "Price", value: "≈ $45/kg" },
    { title: "Discovered", value: "Georg Brandt (1735)" }
  ],
  28: [ // Nickel
    { title: "Electron Config", value: "[Ar] 3d⁸ 4s²" },
    { title: "Density", value: "8.912 g/cm³" },
    { title: "Melting Point", value: "1455°C" },
    { title: "Boiling Point", value: "2730°C" },
    { title: "Price", value: "≈ $16/kg" },
    { title: "Discovered", value: "Axel Fredrik Cronstedt (1751)" }
  ],
  29: [ // Copper
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s¹" },
    { title: "Density", value: "8.96 g/cm³" },
    { title: "Melting Point", value: "1084.62°C" },
    { title: "Boiling Point", value: "2562°C" },
    { title: "Price", value: "≈ $9/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  30: [ // Zinc
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s²" },
    { title: "Density", value: "7.134 g/cm³" },
    { title: "Melting Point", value: "419.53°C" },
    { title: "Boiling Point", value: "907°C" },
    { title: "Price", value: "≈ $3.5/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  31: [ // Gallium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p¹" },
    { title: "Density", value: "5.91 g/cm³" },
    { title: "Melting Point", value: "29.76°C" },
    { title: "Boiling Point", value: "2204°C" },
    { title: "Price", value: "≈ $0.5/g" },
    { title: "Discovered", value: "Lecoq de Boisbaudran (1875)" }
  ],
  32: [ // Germanium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p²" },
    { title: "Density", value: "5.323 g/cm³" },
    { title: "Melting Point", value: "938.25°C" },
    { title: "Boiling Point", value: "2833°C" },
    { title: "Price", value: "≈ $1.2/g" },
    { title: "Discovered", value: "Clemens Winkler (1886)" }
  ],
  33: [ // Arsenic
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p³" },
    { title: "Density", value: "5.727 g/cm³" },
    { title: "Melting Point", value: "817°C" },
    { title: "Boiling Point", value: "614°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Albertus Magnus (1250)" },
    { title: "abundanceData", value: [200, 400, 300, 600, 500, 800] }, // أرقام المخطط هنا
  ],
  34: [ // Selenium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁴" },
    { title: "Density", value: "4.81 g/cm³" },
    { title: "Melting Point", value: "221°C" },
    { title: "Boiling Point", value: "685°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Jöns Jakob Berzelius (1817)" }
  ],
  35: [ // Bromine
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁵" },
    { title: "Density", value: "3.1028 g/cm³" },
    { title: "Melting Point", value: "-7.2°C" },
    { title: "Boiling Point", value: "58.8°C" },
    { title: "Price", value: "≈ $0.04/g" },
    { title: "Discovered", value: "A.J. Balard & L. Gmelin (1826)" }
  ],
  36: [ // Krypton
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁶" },
    { title: "Density", value: "0.003733 g/cm³" },
    { title: "Melting Point", value: "-157.36°C" },
    { title: "Boiling Point", value: "-153.22°C" },
    { title: "Price", value: "≈ $0.3/L" },
    { title: "Discovered", value: "W. Ramsay & M. Travers (1898)" }
  ],
  37: [ // Rubidium
    { title: "Electron Config", value: "[Kr] 5s¹" },
    { title: "Density", value: "1.532 g/cm³" },
    { title: "Melting Point", value: "39.31°C" },
    { title: "Boiling Point", value: "688°C" },
    { title: "Price", value: "≈ $12/g" },
    { title: "Discovered", value: "R. Bunsen & G. Kirchhoff (1861)" }
  ],
  38: [ // Strontium
    { title: "Electron Config", value: "[Kr] 5s²" },
    { title: "Density", value: "2.64 g/cm³" },
    { title: "Melting Point", value: "777°C" },
    { title: "Boiling Point", value: "1382°C" },
    { title: "Price", value: "≈ $1/g" },
    { title: "Discovered", value: "Adair Crawford (1790)" }
  ],
  39: [ // Yttrium
    { title: "Electron Config", value: "[Kr] 4d¹ 5s²" },
    { title: "Density", value: "4.472 g/cm³" },
    { title: "Melting Point", value: "1522°C" },
    { title: "Boiling Point", value: "3338°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Johan Gadolin (1794)" }
  ],
  40: [ // Zirconium
    { title: "Electron Config", value: "[Kr] 4d² 5s²" },
    { title: "Density", value: "6.52 g/cm³" },
    { title: "Melting Point", value: "1855°C" },
    { title: "Boiling Point", value: "4409°C" },
    { title: "Price", value: "≈ $0.03/g" },
    { title: "Discovered", value: "M.H. Klaproth (1789)" }
  ],
  41: [ // Niobium
    { title: "Electron Config", value: "[Kr] 4d⁴ 5s¹" },
    { title: "Density", value: "8.57 g/cm³" },
    { title: "Melting Point", value: "2477°C" },
    { title: "Boiling Point", value: "4744°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Charles Hatchett (1801)" }
  ],
  42: [ // Molybdenum
    { title: "Electron Config", value: "[Kr] 4d⁵ 5s¹" },
    { title: "Density", value: "10.28 g/cm³" },
    { title: "Melting Point", value: "2623°C" },
    { title: "Boiling Point", value: "4639°C" },
    { title: "Price", value: "≈ $0.04/g" },
    { title: "Discovered", value: "Carl Wilhelm Scheele (1778)" }
  ],
  43: [ // Technetium
    { title: "Electron Config", value: "[Kr] 4d⁵ 5s²" },
    { title: "Density", value: "11 g/cm³" },
    { title: "Melting Point", value: "2157°C" },
    { title: "Boiling Point", value: "4265°C" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "C. Perrier & E. Segrè (1937)" }
  ],
  44: [ // Ruthenium
    { title: "Electron Config", value: "[Kr] 4d⁷ 5s¹" },
    { title: "Density", value: "12.45 g/cm³" },
    { title: "Melting Point", value: "2334°C" },
    { title: "Boiling Point", value: "4150°C" },
    { title: "Price", value: "≈ $8/g" },
    { title: "Discovered", value: "Karl Ernst Claus (1844)" }
  ],
  45: [ // Rhodium
    { title: "Electron Config", value: "[Kr] 4d⁸ 5s¹" },
    { title: "Density", value: "12.41 g/cm³" },
    { title: "Melting Point", value: "1964°C" },
    { title: "Boiling Point", value: "3695°C" },
    { title: "Price", value: "≈ $150/g" },
    { title: "Discovered", value: "William Hyde Wollaston (1803)" }
  ],
  46: [ // Palladium
    { title: "Electron Config", value: "[Kr] 4d¹⁰" },
    { title: "Density", value: "12.023 g/cm³" },
    { title: "Melting Point", value: "1554.9°C" },
    { title: "Boiling Point", value: "2963°C" },
    { title: "Price", value: "≈ $60/g" },
    { title: "Discovered", value: "William Hyde Wollaston (1803)" }
  ],
  47: [ // Silver
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s¹" },
    { title: "Density", value: "10.49 g/cm³" },
    { title: "Melting Point", value: "961.78°C" },
    { title: "Boiling Point", value: "2162°C" },
    { title: "Price", value: "≈ $0.8/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  48: [ // Cadmium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s²" },
    { title: "Density", value: "8.65 g/cm³" },
    { title: "Melting Point", value: "321.07°C" },
    { title: "Boiling Point", value: "767°C" },
    { title: "Price", value: "≈ $0.01/g" },
    { title: "Discovered", value: "F. Stromeyer & K.S.L. Hermann (1817)" }
  ],
  49: [ // Indium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p¹" },
    { title: "Density", value: "7.31 g/cm³" },
    { title: "Melting Point", value: "156.6°C" },
    { title: "Boiling Point", value: "2072°C" },
    { title: "Price", value: "≈ $0.3/g" },
    { title: "Discovered", value: "F. Reich & H.T. Richter (1863)" }
  ],
  50: [ // Tin
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p²" },
    { title: "Density", value: "7.265 g/cm³" },
    { title: "Melting Point", value: "231.93°C" },
    { title: "Boiling Point", value: "2602°C" },
    { title: "Price", value: "≈ $0.02/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  51: [ // Antimony
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p³" },
    { title: "Density", value: "6.697 g/cm³" },
    { title: "Melting Point", value: "630.63°C" },
    { title: "Boiling Point", value: "1587°C" },
    { title: "Price", value: "≈ $0.01/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  52: [ // Tellurium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁴" },
    { title: "Density", value: "6.24 g/cm³" },
    { title: "Melting Point", value: "449.51°C" },
    { title: "Boiling Point", value: "988°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Franz-Joseph Müller von Reichenstein (1782)" }
  ],
  53: [ // Iodine
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁵" },
    { title: "Density", value: "4.933 g/cm³" },
    { title: "Melting Point", value: "113.7°C" },
    { title: "Boiling Point", value: "184.3°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Bernard Courtois (1811)" }
  ],
  54: [ // Xenon
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁶" },
    { title: "Density", value: "0.005887 g/cm³" },
    { title: "Melting Point", value: "-111.75°C" },
    { title: "Boiling Point", value: "-108.1°C" },
    { title: "Price", value: "≈ $1.2/L" },
    { title: "Discovered", value: "W. Ramsay & M. Travers (1898)" }
  ],
  55: [ // Cesium
    { title: "Electron Config", value: "[Xe] 6s¹" },
    { title: "Density", value: "1.93 g/cm³" },
    { title: "Melting Point", value: "28.44°C" },
    { title: "Boiling Point", value: "671°C" },
    { title: "Price", value: "≈ $11/g" },
    { title: "Discovered", value: "R. Bunsen & G. Kirchhoff (1860)" }
  ],
  56: [ // Barium
    { title: "Electron Config", value: "[Xe] 6s²" },
    { title: "Density", value: "3.51 g/cm³" },
    { title: "Melting Point", value: "727°C" },
    { title: "Boiling Point", value: "1897°C" },
    { title: "Price", value: "≈ $1/g" },
    { title: "Discovered", value: "Humphry Davy (1808)" }
  ],
  57: [ // Lanthanum
    { title: "Electron Config", value: "[Xe] 5d¹ 6s²" },
    { title: "Density", value: "6.162 g/cm³" },
    { title: "Melting Point", value: "920°C" },
    { title: "Boiling Point", value: "3464°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Carl Gustaf Mosander (1839)" }
  ],
  58: [ // Cerium
    { title: "Electron Config", value: "[Xe] 4f¹ 5d¹ 6s²" },
    { title: "Density", value: "6.77 g/cm³" },
    { title: "Melting Point", value: "795°C" },
    { title: "Boiling Point", value: "3443°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "M.H. Klaproth & J.J. Berzelius (1803)" }
  ],
  59: [ // Praseodymium
    { title: "Electron Config", value: "[Xe] 4f³ 6s²" },
    { title: "Density", value: "6.77 g/cm³" },
    { title: "Melting Point", value: "935°C" },
    { title: "Boiling Point", value: "3520°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Carl Auer von Welsbach (1885)" }
  ],
  60: [ // Neodymium
    { title: "Electron Config", value: "[Xe] 4f ⁴ 6s²" },
    { title: "Density", value: "7.01 g/cm³" },
    { title: "Melting Point", value: "1024°C" },
    { title: "Boiling Point", value: "3074°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Carl Auer von Welsbach (1885)" }
  ],
  61: [ // Promethium
    { title: "Electron Config", value: "[Xe] 4f⁵ 6s²" },
    { title: "Density", value: "7.26 g/cm³" },
    { title: "Melting Point", value: "1042°C" },
    { title: "Boiling Point", value: "3000°C" },
    { title: "Price", value: "Synthetic (Rare)" },
    { title: "Discovered", value: "Jacob A. Marinsky (1945)" }
  ],
  62: [ // Samarium
    { title: "Electron Config", value: "[Xe] 4f⁶ 6s²" },
    { title: "Density", value: "7.52 g/cm³" },
    { title: "Melting Point", value: "1072°C" },
    { title: "Boiling Point", value: "1794°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Lecoq de Boisbaudran (1879)" }
  ],
  63: [ // Europium
    { title: "Electron Config", value: "[Xe] 4f⁷ 6s²" },
    { title: "Density", value: "5.24 g/cm³" },
    { title: "Melting Point", value: "822°C" },
    { title: "Boiling Point", value: "1529°C" },
    { title: "Price", value: "≈ $3.0/g" },
    { title: "Discovered", value: "Eugène-Anatole Demarçay (1896)" }
  ],
  64: [ // Gadolinium
    { title: "Electron Config", value: "[Xe] 4f⁷ 5d¹ 6s²" },
    { title: "Density", value: "7.90 g/cm³" },
    { title: "Melting Point", value: "1313°C" },
    { title: "Boiling Point", value: "3273°C" },
    { title: "Price", value: "≈ $0.12/g" },
    { title: "Discovered", value: "Jean Charles de Marignac (1880)" }
  ],
  65: [ // Terbium
    { title: "Electron Config", value: "[Xe] 4f⁹ 6s²" },
    { title: "Density", value: "8.23 g/cm³" },
    { title: "Melting Point", value: "1356°C" },
    { title: "Boiling Point", value: "3230°C" },
    { title: "Price", value: "≈ $0.6/g" },
    { title: "Discovered", value: "Carl Gustaf Mosander (1843)" }
  ],
  66: [ // Dysprosium
    { title: "Electron Config", value: "[Xe] 4f¹⁰ 6s²" },
    { title: "Density", value: "8.54 g/cm³" },
    { title: "Melting Point", value: "1412°C" },
    { title: "Boiling Point", value: "2567°C" },
    { title: "Price", value: "≈ $0.3/g" },
    { title: "Discovered", value: "Lecoq de Boisbaudran (1886)" }
  ],
  67: [ // Holmium
    { title: "Electron Config", value: "[Xe] 4f¹¹ 6s²" },
    { title: "Density", value: "8.79 g/cm³" },
    { title: "Melting Point", value: "1474°C" },
    { title: "Boiling Point", value: "2700°C" },
    { title: "Price", value: "≈ $0.7/g" },
    { title: "Discovered", value: "Marc Delafontaine (1878)" }
  ],
  68: [ // Erbium
    { title: "Electron Config", value: "[Xe] 4f¹² 6s²" },
    { title: "Density", value: "9.07 g/cm³" },
    { title: "Melting Point", value: "1529°C" },
    { title: "Boiling Point", value: "2868°C" },
    { title: "Price", value: "≈ $0.07/g" },
    { title: "Discovered", value: "Carl Gustaf Mosander (1843)" }
  ],
  69: [ // Thulium
    { title: "Electron Config", value: "[Xe] 4f¹³ 6s²" },
    { title: "Density", value: "9.32 g/cm³" },
    { title: "Melting Point", value: "1545°C" },
    { title: "Boiling Point", value: "1950°C" },
    { title: "Price", value: "≈ $50.0/g" },
    { title: "Discovered", value: "Per Teodor Cleve (1879)" }
  ],
  70: [ // Ytterbium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 6s²" },
    { title: "Density", value: "6.90 g/cm³" },
    { title: "Melting Point", value: "824°C" },
    { title: "Boiling Point", value: "1196°C" },
    { title: "Price", value: "≈ $0.14/g" },
    { title: "Discovered", value: "Jean Charles de Marignac (1878)" }
  ],
  71: [ // Lutetium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹ 6s²" },
    { title: "Density", value: "9.84 g/cm³" },
    { title: "Melting Point", value: "1663°C" },
    { title: "Boiling Point", value: "3402°C" },
    { title: "Price", value: "≈ $10.0/g" },
    { title: "Discovered", value: "Georges Urbain (1907)" }
  ],
  72: [ // Hafnium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d² 6s²" },
    { title: "Density", value: "13.31 g/cm³" },
    { title: "Melting Point", value: "2233°C" },
    { title: "Boiling Point", value: "4603°C" },
    { title: "Price", value: "≈ $1.2/g" },
    { title: "Discovered", value: "Dirk Coster (1923)" }
  ],
  73: [ // Tantalum
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d³ 6s²" },
    { title: "Density", value: "16.65 g/cm³" },
    { title: "Melting Point", value: "3017°C" },
    { title: "Boiling Point", value: "5458°C" },
    { title: "Price", value: "≈ $0.4/g" },
    { title: "Discovered", value: "Anders Gustaf Ekeberg (1802)" }
  ],
  74: [ // Tungsten
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d⁴ 6s²" },
    { title: "Density", value: "19.25 g/cm³" },
    { title: "Melting Point", value: "3422°C" },
    { title: "Boiling Point", value: "5555°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Fausto and Juan José de Elhuyar (1783)" }
  ],
  75: [ // Rhenium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d⁵ 6s²" },
    { title: "Density", value: "21.02 g/cm³" },
    { title: "Melting Point", value: "3186°C" },
    { title: "Boiling Point", value: "5596°C" },
    { title: "Price", value: "≈ $3.0/g" },
    { title: "Discovered", value: "Masataka Ogawa (1908)" }
  ],
  76: [ // Osmium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d⁶ 6s²" },
    { title: "Density", value: "22.59 g/cm³" },
    { title: "Melting Point", value: "3033°C" },
    { title: "Boiling Point", value: "5012°C" },
    { title: "Price", value: "≈ $13.0/g" },
    { title: "Discovered", value: "Smithson Tennant (1803)" }
  ],
  77: [ // Iridium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d⁷ 6s²" },
    { title: "Density", value: "22.56 g/cm³" },
    { title: "Melting Point", value: "2446°C" },
    { title: "Boiling Point", value: "4428°C" },
    { title: "Price", value: "≈ $160.0/g" },
    { title: "Discovered", value: "Smithson Tennant (1803)" }
  ],
  78: [ // Platinum
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d⁹ 6s¹" },
    { title: "Density", value: "21.45 g/cm³" },
    { title: "Melting Point", value: "1768°C" },
    { title: "Boiling Point", value: "3825°C" },
    { title: "Price", value: "≈ $30.0/g" },
    { title: "Discovered", value: "Antonio de Ulloa (1735)" }
  ],
  79: [ // Gold
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹" },
    { title: "Density", value: "19.30 g/cm³" },
    { title: "Melting Point", value: "1064°C" },
    { title: "Boiling Point", value: "2856°C" },
    { title: "Price", value: "≈ $65.0/g" },
    { title: "Discovered", value: "Known since antiquity" }
  ],
  80: [ // Mercury
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s²" },
    { title: "Density", value: "13.53 g/cm³" },
    { title: "Melting Point", value: "-38.8°C" },
    { title: "Boiling Point", value: "356.7°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Known since antiquity" }
  ],
  81: [ // Thallium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹" },
    { title: "Density", value: "11.85 g/cm³" },
    { title: "Melting Point", value: "304°C" },
    { title: "Boiling Point", value: "1473°C" },
    { title: "Price", value: "≈ $0.3/g" },
    { title: "Discovered", value: "William Crookes (1861)" }
  ],
  82: [ // Lead
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²" },
    { title: "Density", value: "11.34 g/cm³" },
    { title: "Melting Point", value: "327.5°C" },
    { title: "Boiling Point", value: "1749°C" },
    { title: "Price", value: "≈ $0.02/g" },
    { title: "Discovered", value: "Known since antiquity" }
  ],
  83: [ // Bismuth
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³" },
    { title: "Density", value: "9.78 g/cm³" },
    { title: "Melting Point", value: "271.5°C" },
    { title: "Boiling Point", value: "1564°C" },
    { title: "Price", value: "≈ $0.01/g" },
    { title: "Discovered", value: "Claude François Geoffroy (1753)" }
  ],
  84: [ // Polonium
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴" },
    { title: "Density", value: "9.19 g/cm³" },
    { title: "Melting Point", value: "254°C" },
    { title: "Boiling Point", value: "962°C" },
    { title: "Price", value: "Rare Radioactive" },
    { title: "Discovered", value: "Marie and Pierre Curie (1898)" }
  ],
  85: [ // Astatine
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵" },
    { title: "Density", value: "7.0 g/cm³" },
    { title: "Melting Point", value: "302°C" },
    { title: "Boiling Point", value: "337°C" },
    { title: "Price", value: "Extremely Rare" },
    { title: "Discovered", value: "Dale R. Corson (1940)" }
  ],
  86: [ // Radon
    { title: "Electron Config", value: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶" },
    { title: "Density", value: "0.0097 g/cm³" },
    { title: "Melting Point", value: "-71°C" },
    { title: "Boiling Point", value: "-61.7°C" },
    { title: "Price", value: "Radioactive Gas" },
    { title: "Discovered", value: "Friedrich Ernst Dorn (1900)" }
  ],
  87: [ // Francium
    { title: "Electron Config", value: "[Rn] 7s¹" },
    { title: "Density", value: "1.87 g/cm³" },
    { title: "Melting Point", value: "27°C" },
    { title: "Boiling Point", value: "677°C" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Marguerite Perey (1939)" }
  ],
  88: [ // Radium
    { title: "Electron Config", value: "[Rn] 7s²" },
    { title: "Density", value: "5.5 g/cm³" },
    { title: "Melting Point", value: "700°C" },
    { title: "Boiling Point", value: "1737°C" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Marie and Pierre Curie (1898)" }
  ],
  89: [ // Actinium
    { title: "Electron Config", value: "[Rn] 6d¹ 7s²" },
    { title: "Density", value: "10.07 g/cm³" },
    { title: "Melting Point", value: "1050°C" },
    { title: "Boiling Point", value: "3198°C" },
    { title: "Price", value: "Rare Radioactive" },
    { title: "Discovered", value: "Friedrich Oskar Giesel (1902)" }
  ],
  90: [ // Thorium
    { title: "Electron Config", value: "[Rn] 6d² 7s²" },
    { title: "Density", value: "11.72 g/cm³" },
    { title: "Melting Point", value: "1750°C" },
    { title: "Boiling Point", value: "4788°C" },
    { title: "Price", value: "≈ $0.15/g" },
    { title: "Discovered", value: "Jöns Jacob Berzelius (1829)" }
  ],
  91: [ // Protactinium
    { title: "Electron Config", value: "[Rn] 5f² 6d¹ 7s²" },
    { title: "Density", value: "15.37 g/cm³" },
    { title: "Melting Point", value: "1568°C" },
    { title: "Boiling Point", value: "4000°C" },
    { title: "Price", value: "Rare Radioactive" },
    { title: "Discovered", value: "Fajans and Göhring (1913)" }
  ],
  92: [ // Uranium
    { title: "Electron Config", value: "[Rn] 5f³ 6d¹ 7s²" },
    { title: "Density", value: "18.95 g/cm³" },
    { title: "Melting Point", value: "1132°C" },
    { title: "Boiling Point", value: "4131°C" },
    { title: "Price", value: "≈ $0.08/g" },
    { title: "Discovered", value: "Martin Heinrich Klaproth (1789)" }
  ],
  93: [ // Neptunium
    { title: "Electron Config", value: "[Rn] 5f⁴ 6d¹ 7s²" },
    { title: "Density", value: "20.45 g/cm³" },
    { title: "Melting Point", value: "644°C" },
    { title: "Boiling Point", value: "3902°C" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "McMillan and Abelson (1940)" }
  ],
  94: [ // Plutonium
    { title: "Electron Config", value: "[Rn] 5f⁶ 7s²" },
    { title: "Density", value: "19.84 g/cm³" },
    { title: "Melting Point", value: "640°C" },
    { title: "Boiling Point", value: "3228°C" },
    { title: "Price", value: "≈ $4000/g" },
    { title: "Discovered", value: "Glenn T. Seaborg (1940)" }
  ],
  95: [ // Americium
    { title: "Electron Config", value: "[Rn] 5f⁷ 7s²" },
    { title: "Density", value: "13.67 g/cm³" },
    { title: "Melting Point", value: "1176°C" },
    { title: "Boiling Point", value: "2011°C" },
    { title: "Price", value: "≈ $1500/mg" },
    { title: "Discovered", value: "Glenn T. Seaborg (1944)" }
  ],
  96: [ // Curium
    { title: "Electron Config", value: "[Rn] 5f⁷ 6d¹ 7s²" },
    { title: "Density", value: "13.51 g/cm³" },
    { title: "Melting Point", value: "1345°C" },
    { title: "Boiling Point", value: "3110°C" },
    { title: "Price", value: "≈ $160/mg" },
    { title: "Discovered", value: "Glenn T. Seaborg (1944)" }
  ],
  97: [ // Berkelium
    { title: "Electron Config", value: "[Rn] 5f⁹ 7s²" },
    { title: "Density", value: "14.78 g/cm³" },
    { title: "Melting Point", value: "986°C" },
    { title: "Boiling Point", value: "2627°C" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Glenn T. Seaborg (1949)" }
  ],
  98: [ // Californium
    { title: "Electron Config", value: "[Rn] 5f¹⁰ 7s²" },
    { title: "Density", value: "15.10 g/cm³" },
    { title: "Melting Point", value: "900°C" },
    { title: "Boiling Point", value: "1470°C" },
    { title: "Price", value: "≈ $27M/g" },
    { title: "Discovered", value: "Glenn T. Seaborg (1950)" }
  ],
  99: [ // Einsteinium
    { title: "Electron Config", value: "[Rn] 5f¹¹ 7s²" },
    { title: "Density", value: "8.84 g/cm³" },
    { title: "Melting Point", value: "860°C" },
    { title: "Boiling Point", value: "996°C" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Albert Ghiorso (1952)" }
  ],
  100: [ // Fermium
    { title: "Electron Config", value: "[Rn] 5f¹² 7s²" },
    { title: "Density", value: "Unknown" },
    { title: "Melting Point", value: "1527°C" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Albert Ghiorso (1952)" }
  ],
  101: [ // Mendelevium
    { title: "Electron Config", value: "[Rn] 5f¹³ 7s²" },
    { title: "Density", value: "Unknown" },
    { title: "Melting Point", value: "827°C" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Albert Ghiorso (1955)" }
  ],
  102: [ // Nobelium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 7s²" },
    { title: "Density", value: "Unknown" },
    { title: "Melting Point", value: "827°C" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Nobel Institute (1957)" }
  ],
  103: [ // Lawrencium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 7s² 7p¹" },
    { title: "Density", value: "Unknown" },
    { title: "Melting Point", value: "1627°C" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Radioactive" },
    { title: "Discovered", value: "Albert Ghiorso (1961)" }
  ],
  104: [ // Rutherfordium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d² 7s²" },
    { title: "Density", value: "23.2 g/cm³ (pred.)" },
    { title: "Melting Point", value: "2100°C (pred.)" },
    { title: "Boiling Point", value: "5500°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (1964)" }
  ],
  105: [ // Dubnium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d³ 7s²" },
    { title: "Density", value: "29.3 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (1967)" }
  ],
  106: [ // Seaborgium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d⁴ 7s²" },
    { title: "Density", value: "35.0 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Lawrence Berkeley Lab (1974)" }
  ],
  107: [ // Bohrium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d⁵ 7s²" },
    { title: "Density", value: "37.1 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1981)" }
  ],
  108: [ // Hassium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d⁶ 7s²" },
    { title: "Density", value: "40.7 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1984)" }
  ],
  109: [ // Meitnerium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d⁷ 7s²" },
    { title: "Density", value: "37.4 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1982)" }
  ],
  110: [ // Darmstadtium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d⁹ 7s¹" },
    { title: "Density", value: "34.8 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1994)" }
  ],
  111: [ // Roentgenium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹" },
    { title: "Density", value: "28.7 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "Unknown" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1994)" }
  ],
  112: [ // Copernicium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s²" },
    { title: "Density", value: "23.7 g/cm³ (pred.)" },
    { title: "Melting Point", value: "Unknown" },
    { title: "Boiling Point", value: "67°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "GSI Darmstadt (1996)" }
  ],
  113: [ // Nihonium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹" },
    { title: "Density", value: "16 g/cm³ (pred.)" },
    { title: "Melting Point", value: "430°C (pred.)" },
    { title: "Boiling Point", value: "1130°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "RIKEN (2003)" }
  ],
  114: [ // Flerovium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²" },
    { title: "Density", value: "14 g/cm³ (pred.)" },
    { title: "Melting Point", value: "67°C (pred.)" },
    { title: "Boiling Point", value: "147°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (1998)" }
  ],
  115: [ // Moscovium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³" },
    { title: "Density", value: "13.5 g/cm³ (pred.)" },
    { title: "Melting Point", value: "400°C (pred.)" },
    { title: "Boiling Point", value: "1100°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (2003)" }
  ],
  116: [ // Livermorium
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴" },
    { title: "Density", value: "12.9 g/cm³ (pred.)" },
    { title: "Melting Point", value: "437°C (pred.)" },
    { title: "Boiling Point", value: "812°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (2000)" }
  ],
  117: [ // Tennessine
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵" },
    { title: "Density", value: "7.2 g/cm³ (pred.)" },
    { title: "Melting Point", value: "450°C (pred.)" },
    { title: "Boiling Point", value: "610°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (2010)" }
  ],
  118: [ // Oganesson
    { title: "Electron Config", value: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶" },
    { title: "Density", value: "5.0 g/cm³ (pred.)" },
    { title: "Melting Point", value: "50°C (pred.)" },
    { title: "Boiling Point", value: "80°C (pred.)" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "Joint Institute for Nuclear Research (2002)" }
  ]
};
const allAbundance = {
  1: [1400, 1420, 1450, 1480, 1500, 1520], // Hydrogen (H)
  2: [0.008, 0.0082, 0.0085, 0.0088, 0.009, 0.01], // Helium (He) - نادر جداً
  3: [20, 21, 23, 25, 28, 30], // Lithium (Li)
  4: [2.8, 2.8, 2.9, 3.0, 3.1, 3.2], // Beryllium (Be)
  5: [10, 10, 11, 11, 12, 13], // Boron (B)
  6: [200, 210, 225, 240, 260, 280], // Carbon (C)
  7: [19, 19, 20, 20, 21, 22], // Nitrogen (N)
  8: [461000, 461200, 461500, 461800, 462000, 462500], // Oxygen (O) - الأكثر وفرة
  9: [585, 590, 600, 610, 625, 640], // Fluorine (F)
  10: [0.005, 0.0052, 0.0055, 0.0058, 0.006, 0.007], // Neon (Ne) - نادر جداً
  11: [23600, 23800, 24000, 24200, 24500, 25000], // Sodium (Na)
  12: [23300, 23500, 23700, 24000, 24300, 24800], // Magnesium (Mg)
  13: [82300, 82500, 82700, 83000, 83500, 84000], // Aluminum (Al)
  14: [282000, 282500, 283000, 283500, 284000, 285000], // Silicon (Si)
  15: [1050, 1060, 1080, 1100, 1120, 1150], // Phosphorus (P)
  16: [350, 360, 380, 400, 420, 450], // Sulfur (S)
  17: [145, 148, 150, 155, 160, 170], // Chlorine (Cl)
  18: [3.5, 3.6, 3.7, 3.8, 3.9, 4.0], // Argon (Ar)
  19: [20900, 21100, 21300, 21500, 21800, 22000], // Potassium (K)
  20: [41500, 41800, 42200, 42600, 43000, 43500], // Calcium (Ca)
  21: [22, 23, 24, 25, 26, 27], // Scandium (Sc)
  22: [5650, 5680, 5710, 5740, 5780, 5820], // Titanium (Ti)
  23: [120, 125, 132, 140, 150, 160], // Vanadium (V)
  24: [102, 105, 108, 112, 118, 125], // Chromium (Cr)
  25: [950, 965, 980, 1000, 1020, 1050], // Manganese (Mn)
  26: [56300, 56500, 56800, 57100, 57500, 58000], // Iron (Fe)
  27: [25, 26, 27, 28, 29, 31], // Cobalt (Co)
  28: [84, 87, 90, 95, 99, 105], // Nickel (Ni)
  29: [60, 63, 67, 72, 78, 85], // Copper (Cu)
  30: [70, 75, 79, 84, 90, 98],  // Zinc (Zn)
  31: [18, 18, 19, 19, 20, 21], // Gallium (Ga)
  32: [1.5, 1.5, 1.6, 1.7, 1.8, 2.0], // Germanium (Ge)
  33: [1.8, 1.8, 1.9, 2.0, 2.1, 2.3], // Arsenic (As)
  34: [0.05, 0.05, 0.06, 0.07, 0.08, 0.1], // Selenium (Se)
  35: [2.4, 2.5, 2.6, 2.8, 3.0, 3.2], // Bromine (Br)
  36: [0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001], // Krypton (Kr)
  37: [90, 92, 95, 98, 102, 105], // Rubidium (Rb)
  38: [370, 375, 380, 390, 400, 415], // Strontium (Sr)
  39: [33, 33, 34, 35, 36, 38], // Yttrium (Y)
  40: [160, 162, 165, 170, 175, 180], // Zirconium (Zr)
  41: [20, 20, 21, 21, 22, 23], // Niobium (Nb)
  42: [1.2, 1.2, 1.3, 1.4, 1.5, 1.6], // Molybdenum (Mo)
  43: [0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001], // Technetium (Tc) - مشع
  44: [0.001, 0.001, 0.001, 0.001, 0.002, 0.002], // Ruthenium (Ru)
  45: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001], // Rhodium (Rh)
  46: [0.015, 0.015, 0.016, 0.017, 0.018, 0.02], // Palladium (Pd)
  47: [0.075, 0.075, 0.078, 0.08, 0.085, 0.09], // Silver (Ag) - الفضة
  48: [0.15, 0.15, 0.16, 0.17, 0.18, 0.2], // Cadmium (Cd)
  49: [0.25, 0.25, 0.26, 0.27, 0.28, 0.3], // Indium (In)
  50: [2.3, 2.3, 2.4, 2.5, 2.6, 2.8], // Tin (Sn) - القصدير
  51: [0.2, 0.2, 0.2, 0.3, 0.4, 0.5], // Antimony (Sb)
  52: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001], // Tellurium (Te)
  53: [0.45, 0.46, 0.48, 0.50, 0.52, 0.55], // Iodine (I) - اليود
  54: [0.00003, 0.00003, 0.00003, 0.00003, 0.00003, 0.00004], // Xenon (Xe)
  55: [3, 3, 3.2, 3.5, 3.8, 4], // Cesium (Cs)
  56: [425, 430, 440, 450, 465, 480], // Barium (Ba)
  57: [39, 40, 42, 44, 46, 50], // Lanthanum (La)
  58: [66, 68, 70, 72, 75, 80], // Cerium (Ce)
  59: [9.2, 9.3, 9.5, 9.7, 10, 11], // Praseodymium (Pr)
  60: [41, 42, 43, 45, 47, 50],  // Neodymium (Nd)
  61: [0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001], // Promethium (Pm) - مشع نادر جداً
  62: [7.0, 7.1, 7.3, 7.5, 7.8, 8.2], // Samarium (Sm)
  63: [2.0, 2.1, 2.1, 2.2, 2.3, 2.5], // Europium (Eu)
  64: [6.2, 6.3, 6.5, 6.7, 7.0, 7.4], // Gadolinium (Gd)
  65: [1.2, 1.2, 1.3, 1.4, 1.5, 1.6], // Terbium (Tb)
  66: [5.2, 5.4, 5.6, 5.9, 6.2, 6.5], // Dysprosium (Dy)
  67: [1.3, 1.3, 1.4, 1.5, 1.6, 1.7], // Holmium (Ho)
  68: [3.5, 3.6, 3.8, 4.0, 4.2, 4.5], // Erbium (Er)
  69: [0.52, 0.54, 0.56, 0.59, 0.62, 0.65], // Thulium (Tm)
  70: [3.2, 3.3, 3.5, 3.7, 3.9, 4.2], // Ytterbium (Yb)
  71: [0.8, 0.8, 0.9, 0.9, 1.0, 1.1], // Lutetium (Lu)
  72: [3.0, 3.1, 3.3, 3.5, 3.8, 4.0], // Hafnium (Hf)
  73: [2.0, 2.1, 2.2, 2.3, 2.5, 2.7], // Tantalum (Ta)
  74: [1.3, 1.3, 1.4, 1.5, 1.6, 1.8], // Tungsten (W)
  75: [0.0007, 0.0007, 0.0008, 0.0008, 0.0009, 0.001], // Rhenium (Re)
  76: [0.0015, 0.0015, 0.0016, 0.0017, 0.0018, 0.002], // Osmium (Os)
  77: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001], // Iridium (Ir)
  78: [0.005, 0.005, 0.006, 0.007, 0.008, 0.01], // Platinum (Pt)
  79: [0.004, 0.004, 0.004, 0.005, 0.005, 0.006], // Gold (Au) - الذهب
  80: [0.085, 0.088, 0.092, 0.095, 0.1, 0.12], // Mercury (Hg)
  81: [0.85, 0.88, 0.92, 0.95, 1.0, 1.1], // Thallium (Tl)
  82: [14, 14, 15, 15, 16, 17], // Lead (Pb) - الرصاص
  83: [0.009, 0.009, 0.01, 0.01, 0.01, 0.02], // Bismuth (Bi)
  84: [0.00000001, 0.00000001, 0.00000001, 0.00000001, 0.00000001, 0.00000001], // Polonium (Po)
  85: [0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001], // Astatine (At)
  86: [0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001], // Radon (Rn)
  87: [0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001, 0.00000000001], // Francium (Fr)
  88: [0.000001, 0.000001, 0.000001, 0.000001, 0.000001, 0.000001], // Radium (Ra)
  89: [0.00000001, 0.00000001, 0.00000001, 0.00000001, 0.00000001, 0.00000001], // Actinium (Ac)
  90: [12, 12, 13, 13, 14, 15], // Thorium (Th)
  91: [0.0000008, 0.0000008, 0.0000009, 0.000001, 0.000001, 0.000001], // Protactinium (Pa)
  92: [2.7, 2.7, 2.8, 2.8, 2.9, 3.0], // Uranium (U) - اليورانيوم (متوفر نسبياً)
  93: [0.000000001, 0.000000001, 0.000000001, 0.000000001, 0.000000001, 0.000000001], // Neptunium (Np)
  94: [0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001, 0.0000000001], // Plutonium (Pu)
  95: [0, 0, 0, 0, 0, 0], // Americium (Am) - اصطناعي بالكامل
  96: [0, 0, 0, 0, 0, 0], // Curium (Cm)
  97: [0, 0, 0, 0, 0, 0], // Berkelium (Bk)
  98: [0, 0, 0, 0, 0, 0], // Californium (Cf)
  99: [0, 0, 0, 0, 0, 0], // Einsteinium (Es)
  100: [0, 0, 0, 0, 0, 0], // Fermium (Fm)
  101: [0, 0, 0, 0, 0, 0], // Mendelevium (Md)
  102: [0, 0, 0, 0, 0, 0], // Nobelium (No)
  103: [0, 0, 0, 0, 0, 0], // Lawrencium (Lr)
  104: [0, 0, 0, 0, 0, 0], // Rutherfordium (Rf)
  105: [0, 0, 0, 0, 0, 0], // Dubnium (Db)
  106: [0, 0, 0, 0, 0, 0], // Seaborgium (Sg)
  107: [0, 0, 0, 0, 0, 0], // Bohrium (Bh)
  108: [0, 0, 0, 0, 0, 0], // Hassium (Hs)
  109: [0, 0, 0, 0, 0, 0], // Meitnerium (Mt)
  110: [0, 0, 0, 0, 0, 0], // Darmstadtium (Ds)
  111: [0, 0, 0, 0, 0, 0], // Roentgenium (Rg)
  112: [0, 0, 0, 0, 0, 0], // Copernicium (Cn)
  113: [0, 0, 0, 0, 0, 0], // Nihonium (Nh)
  114: [0, 0, 0, 0, 0, 0], // Flerovium (Fl)
  115: [0, 0, 0, 0, 0, 0], // Moscovium (Mc)
  116: [0, 0, 0, 0, 0, 0], // Livermorium (Lv)
  117: [0, 0, 0, 0, 0, 0], // Tennessine (Ts)
  118: [0, 0, 0, 0, 0, 0]  // Oganesson (Og)

};

const elementData = {
  // 1: Hydrogen (H)
  1: [
    { name: "China", value: 50 },
    { name: "USA", value: 30 },
    { name: "India", value: 20 }
  ],
  // 2: Helium (He)
 2: [
    { name: "atmosphirique", value: 1 },
    { name: "globel", value: 99 }
  ],
  // 3: Lithium (Li)
  3: [
    { name: "Australia", value: 55 },
    { name: "Chile", value: 30 },
    { name: "China", value: 15 }
  ],
  // 4: Beryllium (Be)
  4: [
    { name: "USA", value: 70 },
    { name: "China", value: 25 },
    { name: "Brazil", value: 5 }
  ],
  // 5: Boron (B)
  5: [
    { name: "Turkey", value: 65 },
    { name: "USA", value: 20 },
    { name: "Chile", value: 15 }
  ],
  // 6: Carbon (Graphite)
  6: [
    { name: "China", value: 75 },
    { name: "Mozambique", value: 15 },
    { name: "Brazil", value: 10 }
  ],
  // 7: Nitrogen (N)
 7: [
    { name: "atmosphirique", value: 78 },
    { name: "globel", value: 22 }
  ],
  // 8: Oxygen (O)
8: [
    { name: "atmosphirique", value: 21 },
    { name: "globel", value: 79 }
  ],
  // 9: Fluorine (F)
  9: [
    { name: "China", value: 70 },
    { name: "Mexico", value: 20 },
    { name: "Mongolia", value: 10 }
  ],
  // 10: Neon (Ne)
10: [
    { name: "atmosphirique", value: 1 },
    { name: "globel", value: 99 }
  ],
  // 11: Sodium (Na)
  11: [
    { name: "China", value: 55 },
    { name: "USA", value: 25 },
    { name: "India", value: 20 }
  ],
  // 12: Magnesium (Mg)
  12: [
    { name: "China", value: 92 },
    { name: "Russia", value: 5 },
    { name: "Turkey", value: 3 }
  ],
  // 13: Aluminum (Al)
  13: [
    { name: "China", value: 70 },
    { name: "India", value: 15 },
    { name: "Russia", value: 15 }
  ],
  // 14: Silicon (Si)
  14: [
    { name: "China", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Brazil", value: 8 }
  ],
  // 15: Phosphorus (P)
  15: [
    { name: "China", value: 55 },
    { name: "Morocco", value: 30 },
    { name: "USA", value: 15 }
  ],
  // 16: Sulfur (S)
  16: [
    { name: "China", value: 40 },
    { name: "USA", value: 35 },
    { name: "Russia", value: 25 }
  ],
  // 17: Chlorine (Cl)
  17: [
    { name: "China", value: 55 },
    { name: "USA", value: 30 },
    { name: "Germany", value: 15 }
  ],
  // 18: Argon (Ar)
 18: [
    { name: "atmosphirique", value: 0.93 },
    { name: "globel", value: 99.07 }
  ],
  // 19: Potassium (K)
  19: [
    { name: "Canada", value: 45 },
    { name: "Russia", value: 30 },
    { name: "Belarus", value: 25 }
  ],
  // 20: Calcium (Ca)
  20: [
    { name: "China", value: 65 },
    { name: "USA", value: 20 },
    { name: "India", value: 15 }
  ],
  // 21: Scandium (Sc)
  21: [
    { name: "China", value: 85 },
    { name: "Russia", value: 10 },
    { name: "Madagascar", value: 5 }
  ],
  // 22: Titanium (Ti)
  22: [
    { name: "China", value: 65 },
    { name: "Japan", value: 20 },
    { name: "Russia", value: 15 }
  ],
  // 23: Vanadium (V)
  23: [
    { name: "China", value: 70 },
    { name: "Russia", value: 20 },
    { name: "South Africa", value: 10 }
  ],
  // 24: Chromium (Cr)
  24: [
    { name: "South Africa", value: 60 },
    { name: "Kazakhstan", value: 25 },
    { name: "Turkey", value: 15 }
  ],
  // 25: Manganese (Mn)
  25: [
    { name: "South Africa", value: 50 },
    { name: "Gabon", value: 30 },
    { name: "Australia", value: 20 }
  ],
  // 26: Iron (Fe)
  26: [
    { name: "Australia", value: 55 },
    { name: "Brazil", value: 30 },
    { name: "China", value: 15 }
  ],
  // 27: Cobalt (Co)
  27: [
    { name: "DR Congo", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Australia", value: 8 }
  ],
  // 28: Nickel (Ni)
  28: [
    { name: "Indonesia", value: 70 },
    { name: "Philippines", value: 18 },
    { name: "Russia", value: 12 }
  ],
  // 29: Copper (Cu)
  29: [
    { name: "Chile", value: 50 },
    { name: "Peru", value: 25 },
    { name: "DR Congo", value: 25 }
  ],
  // 30: Zinc (Zn)
  30: [
    { name: "China", value: 60 },
    { name: "Peru", value: 25 },
    { name: "Australia", value: 15 }
  ],
  31: [
    { name: "China", value: 86 },
    { name: "Russia", value: 9 },
    { name: "Japan", value: 5 }
  ],
  // 32: Germanium (Ge)
  32: [
    { name: "China", value: 68 },
    { name: "Russia", value: 17 },
    { name: "USA", value: 15 }
  ],
  // 33: Arsenic (As)
  33: [
    { name: "China", value: 75 },
    { name: "Morocco", value: 15 },
    { name: "Russia", value: 10 }
  ],
  // 34: Selenium (Se)
  34: [
    { name: "China", value: 50 },
    { name: "Japan", value: 25 },
    { name: "Germany", value: 25 }
  ],
  // 35: Bromine (Br)
  35: [
    { name: "Israel", value: 45 },
    { name: "Jordan", value: 30 },
    { name: "USA", value: 25 }
  ],
  // 36: Krypton (Kr)
36: [
    { name: "atmosphirique", value: 0.0001 },
    { name: "globel", value: 99.9999 }
  ],
  // 37: Rubidium (Rb)
  37: [
    { name: "China", value: 60 },
    { name: "Canada", value: 30 },
    { name: "Namibia", value: 10 }
  ],
  // 38: Strontium (Sr)
  38: [
    { name: "Spain", value: 50 },
    { name: "China", value: 35 },
    { name: "Mexico", value: 15 }
  ],
  // 39: Yttrium (Y)
  39: [
    { name: "China", value: 94 },
    { name: "Myanmar", value: 4 },
    { name: "Australia", value: 2 }
  ],
  // 40: Zirconium (Zr)
  40: [
    { name: "Australia", value: 55 },
    { name: "South Africa", value: 30 },
    { name: "China", value: 15 }
  ],
  // 41: Niobium (Nb)
  41: [
    { name: "Brazil", value: 90 },
    { name: "Canada", value: 7 },
    { name: "Russia", value: 3 }
  ],
  // 42: Molybdenum (Mo)
  42: [
    { name: "China", value: 45 },
    { name: "Chile", value: 30 },
    { name: "USA", value: 25 }
  ],
  // 43: Technetium (Tc) - عنصر مشع ينتج في المفاعلات
  43: [
    { name: "USA", value: 40 },
    { name: "Russia", value: 35 },
    { name: "Netherlands", value: 25 }
  ],
  // 44: Ruthenium (Ru)
  44: [
    { name: "South Africa", value: 85 },
    { name: "Russia", value: 10 },
    { name: "Zimbabwe", value: 5 }
  ],
  // 45: Rhodium (Rh)
  45: [
    { name: "South Africa", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Zimbabwe", value: 8 }
  ],
  // 46: Palladium (Pd)
  46: [
    { name: "Russia", value: 43 },
    { name: "South Africa", value: 37 },
    { name: "Canada", value: 20 }
  ],
  // 47: Silver (Ag)
  47: [
    { name: "Mexico", value: 45 },
    { name: "China", value: 30 },
    { name: "Peru", value: 25 }
  ],
  // 48: Cadmium (Cd)
  48: [
    { name: "China", value: 60 },
    { name: "South Korea", value: 25 },
    { name: "Japan", value: 15 }
  ],
  // 49: Indium (In)
  49: [
    { name: "China", value: 65 },
    { name: "South Korea", value: 20 },
    { name: "Canada", value: 15 }
  ],
  // 50: Tin (Sn)
  50: [
    { name: "China", value: 45 },
    { name: "Indonesia", value: 35 },
    { name: "Peru", value: 20 }
  ],
  // 51: Antimony (Sb)
  51: [
    { name: "China", value: 55 },
    { name: "Russia", value: 25 },
    { name: "Tajikistan", value: 20 }
  ],
  // 52: Tellurium (Te)
  52: [
    { name: "China", value: 65 },
    { name: "Russia", value: 20 },
    { name: "Japan", value: 15 }
  ],
  // 53: Iodine (I)
  53: [
    { name: "Chile", value: 65 },
    { name: "Japan", value: 25 },
    { name: "USA", value: 10 }
  ],
  // 54: Xenon (Xe)
 54: [
    { name: "atmosphirique", value: 0.000008 },
    { name: "globel", value: 99.999992 }
  ],
  // 55: Cesium (Cs)
  55: [
    { name: "Canada", value: 55 },
    { name: "China", value: 30 },
    { name: "Zimbabwe", value: 15 }
  ],
  // 56: Barium (Ba)
  56: [
    { name: "China", value: 55 },
    { name: "India", value: 30 },
    { name: "Morocco", value: 15 }
  ],
  // 57: Lanthanum (La)
  57: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Myanmar", value: 5 }
  ],
  // 58: Cerium (Ce)
  58: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Myanmar", value: 5 }
  ],
  // 59: Praseodymium (Pr)
  59: [
    { name: "China", value: 82 },
    { name: "USA", value: 13 },
    { name: "Australia", value: 5 }
  ],
  // 60: Neodymium (Nd)
  60: [
    { name: "China", value: 80 },
    { name: "USA", value: 15 },
    { name: "Thailand", value: 5 }
  ],
  // 61: Promethium (Pm) - (غالباً يتم إنتاجه صناعياً في المفاعلات)
  61: [
    { name: "USA", value: 45 },
    { name: "Russia", value: 35 },
    { name: "China", value: 20 }
  ],
  // 62: Samarium (Sm)
  62: [
    { name: "China", value: 88 },
    { name: "USA", value: 7 },
    { name: "Brazil", value: 5 }
  ],
  // 63: Europium (Eu)
  63: [
    { name: "China", value: 92 },
    { name: "Russia", value: 5 },
    { name: "USA", value: 3 }
  ],
  // 64: Gadolinium (Gd)
  64: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Australia", value: 5 }
  ],
  // 65: Terbium (Tb)
  65: [
    { name: "China", value: 90 },
    { name: "USA", value: 6 },
    { name: "Vietnam", value: 4 }
  ],
  // 66: Dysprosium (Dy)
  66: [
    { name: "China", value: 87 },
    { name: "Myanmar", value: 8 },
    { name: "USA", value: 5 }
  ],
  // 67: Holmium (Ho)
  67: [
    { name: "China", value: 85 },
    { name: "Russia", value: 10 },
    { name: "India", value: 5 }
  ],
  // 68: Erbium (Er)
  68: [
    { name: "China", value: 88 },
    { name: "USA", value: 8 },
    { name: "Canada", value: 4 }
  ],
  // 69: Thulium (Tm)
  69: [
    { name: "China", value: 95 },
    { name: "USA", value: 3 },
    { name: "Australia", value: 2 }
  ],
  // 70: Ytterbium (Yb)
  70: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Brazil", value: 5 }
  ],
  // 71: Lutetium (Lu)
  71: [
    { name: "China", value: 90 },
    { name: "Australia", value: 6 },
    { name: "USA", value: 4 }
  ],
  // 72: Hafnium (Hf)
  72: [
    { name: "France", value: 42 },
    { name: "USA", value: 38 },
    { name: "Russia", value: 20 }
  ],
  // 73: Tantalum (Ta)
  73: [
    { name: "DR Congo", value: 40 },
    { name: "Brazil", value: 30 },
    { name: "Rwanda", value: 30 }
  ],
  // 74: Tungsten (W)
  74: [
    { name: "China", value: 82 },
    { name: "Vietnam", value: 6 },
    { name: "Russia", value: 12 }
  ],
  // 75: Rhenium (Re)
  75: [
    { name: "Chile", value: 55 },
    { name: "USA", value: 25 },
    { name: "Poland", value: 20 }
  ],
  // 76: Osmium (Os)
  76: [
    { name: "South Africa", value: 80 },
    { name: "Russia", value: 15 },
    { name: "Canada", value: 5 }
  ],
  // 77: Iridium (Ir)
  77: [
    { name: "South Africa", value: 85 },
    { name: "Russia", value: 10 },
    { name: "Zimbabwe", value: 5 }
  ],
  // 78: Platinum (Pt)
  78: [
    { name: "South Africa", value: 72 },
    { name: "Russia", value: 11 },
    { name: "Zimbabwe", value: 17 }
  ],
  // 79: Gold (Au)
  79: [
    { name: "China", value: 12 },
    { name: "Australia", value: 10 },
    { name: "Russia", value: 10 } // البقية موزعة عالمياً
  ],
  // 80: Mercury (Hg)
  80: [
    { name: "China", value: 85 },
    { name: "Mexico", value: 10 },
    { name: "Tajikistan", value: 5 }
  ],
  // 81: Thallium (Tl)
  81: [
    { name: "China", value: 55 },
    { name: "Kazakhstan", value: 25 },
    { name: "Russia", value: 20 }
  ],
  // 82: Lead (Pb)
  82: [
    { name: "China", value: 45 },
    { name: "Australia", value: 12 },
    { name: "USA", value: 10 }
  ],
  // 83: Bismuth (Bi)
  83: [
    { name: "China", value: 75 },
    { name: "Laos", value: 15 },
    { name: "South Korea", value: 10 }
  ],
  // 84: Polonium (Po)
  84: [
    { name: "Russia", value: 95 }, // إنتاج مفاعلات
    { name: "USA", value: 5 }
  ],
  // 85: Astatine (At)
  85: [
    { name: "USA", value: 60 },
    { name: "Russia", value: 40 }
  ],
  // 86: Radon (Rn)
  86: [
    { name: "USA", value: 40 },
    { name: "Canada", value: 30 },
    { name: "China", value: 30 }
  ],
  // 87: Francium (Fr)
  87: [
    { name: "Laboratory Production", value: 100 }
  ],
  // 88: Radium (Ra)
  88: [
    { name: "Kazakhstan", value: 40 },
    { name: "Russia", value: 30 },
    { name: "Canada", value: 30 }
  ],
  // 89: Actinium (Ac)
  89: [
    { name: "Russia", value: 50 },
    { name: "USA", value: 50 }
  ],
  // 90: Thorium (Th)
  90: [
    { name: "India", value: 35 },
    { name: "Brazil", value: 20 },
    { name: "Australia", value: 15 }
  ],
  // 91: Protactinium (Pa)
  91: [
    { name: "DR Congo", value: 40 },
    { name: "Canada", value: 35 },
    { name: "Brazil", value: 25 }
  ],
  // 92: Uranium (U)
  92: [
    { name: "Kazakhstan", value: 43 },
    { name: "Canada", value: 15 },
    { name: "Namibia", value: 11 }
  ],
  // 93: Neptunium (Np)
  93: [
    { name: "USA", value: 50 },
    { name: "Russia", value: 50 }
  ],
  // 94: Plutonium (Pu)
  94: [
    { name: "USA", value: 45 },
    { name: "Russia", value: 40 },
    { name: "France", value: 15 }
  ],
  // 95: Americium (Am)
  95: [
    { name: "USA", value: 60 },
    { name: "Russia", value: 40 }
  ],
  // 96: Curium (Cm)
  96: [
    { name: "USA", value: 50 },
    { name: "Russia", value: 50 }
  ],
  // 97: Berkelium (Bk)
  97: [
    { name: "USA (Oak Ridge)", value: 100 }
  ],
  // 98: Californium (Cf)
  98: [
    { name: "USA", value: 70 },
    { name: "Russia", value: 30 }
  ],
  // 99: Einsteinium (Es)
  99: [
    { name: "USA", value: 100 }
  ],
  // 100: Fermium (Fm)
  100: [
    { name: "USA", value: 50 },
    { name: "Russia", value: 50 }
  ],
  // 101: Mendelevium (Md)
  101: [
    { name: "USA", value: 50 },
    { name: "Russia", value: 50 }
  ],
  // 102: Nobelium (No)
  102: [
    { name: "Russia (JINR)", value: 60 },
    { name: "USA (LBNL)", value: 40 }
  ],
  // 103: Lawrencium (Lr)
  103: [
    { name: "USA", value: 50 },
    { name: "Russia", value: 50 }
  ],
  // 104: Rutherfordium (Rf)
  104: [
    { name: "Russia", value: 50 },
    { name: "USA", value: 50 }
  ],
  // 105: Dubnium (Db)
  105: [
    { name: "Russia (Dubna)", value: 100 }
  ],
  // 106: Seaborgium (Sg)
  106: [
    { name: "USA", value: 100 }
  ],
  // 107: Bohrium (Bh)
  107: [
    { name: "Germany (GSI)", value: 100 }
  ],
  // 108: Hassium (Hs)
  108: [
    { name: "Germany", value: 100 }
  ],
  // 109: Meitnerium (Mt)
  109: [
    { name: "Germany", value: 100 }
  ],
  // 110: Darmstadtium (Ds)
  110: [
    { name: "Germany (Darmstadt)", value: 100 }
  ],
  // 111: Roentgenium (Rg)
  111: [
    { name: "Germany", value: 100 }
  ],
  // 112: Copernicium (Cn)
  112: [
    { name: "Germany", value: 100 }
  ],
  // 113: Nihonium (Nh)
  113: [
    { name: "Japan (RIKEN)", value: 100 }
  ],
  // 114: Flerovium (Fl)
  114: [
    { name: "Russia", value: 100 }
  ],
  // 115: Moscovium (Mc)
  115: [
    { name: "Russia (Moscow)", value: 100 }
  ],
  // 116: Livermorium (Lv)
  116: [
    { name: "USA (Livermore)", value: 100 }
  ],
  // 117: Tennessine (Ts)
  117: [
    { name: "USA (Tennessee)", value: 100 }
  ],
  // 118: Oganesson (Og)
  118: [
    { name: "Russia", value: 100 }
  ]
};

const elementUses = {
    1: ["Rocket Fuel", "Ammonia Production", "Hydrogenation of Fats", "Hydrocracking", "Fuel Cells"],
    2: ["Balloons & Airships", "Cryogenics", "Deep-sea Diving Mixes", "Pressurizing Rocket Fuel"],
    3: ["EV Batteries", "Mobile Phones", "Antidepressants", "Aluminium Alloys", "Lubricating Greases"],
    4: ["Aerospace Components", "X-ray Windows", "Missile Guidance", "Non-sparking Tools"],
    5: ["Borosilicate Glass", "Pyrotechnics", "Fiberglass", "Nuclear Control Rods", "Semiconductor Doping"],
    6: ["Steel Alloy", "Jewelry (Diamonds)", "Water Filtration", "Pencils (Graphite)", "Carbon Fiber"],
    7: ["Fertilizers", "Food Preservation", "Liquid Nitrogen", "Explosives", "Electronics Manufacturing"],
    8: ["Steel Manufacturing", "Medical Oxygen", "Rocket Propellant", "Water Treatment", "Oxidizer in Welding"],
    9: ["Toothpaste", "Refrigerants", "Teflon Production", "Uranium Processing", "Glass Etching"],
    10: ["Neon Signs", "High-voltage Indicators", "Gas Lasers", "Cryogenic Refrigerant"],
    11: ["Street Lights", "Heat Exchangers", "Table Salt", "Chemical Synthesis", "Nuclear Reactor Coolant"],
    12: ["Aircraft Alloys", "Flares & Fireworks", "Car Parts", "Laptops & Cameras", "Magnesium Milk"],
    13: ["Beverage Cans", "Aerospace Engineering", "Construction Materials", "Electrical Transmission", "Kitchen Foil"],
    14: ["Microchips", "Solar Cells", "Glass & Ceramics", "Concrete & Bricks", "Silicone Rubber"],
    15: ["Fertilizers", "Safety Matches", "Detergents", "Steel Production", "Pesticides"],
    16: ["Sulfuric Acid Production", "Rubber Vulcanization", "Gunpowder", "Fungicides", "Batteries"],
    17: ["Water Purification", "PVC Pipes", "Disinfectants", "Bleaching Paper", "Chlorinated Solvents"],
    18: ["Light Bulbs", "Double-glazing Insulation", "Welding Shields", "Titanium Production", "Silicon Wafer Growth"],
    19: ["Fertilizers", "Liquid Soaps", "Glassmaking", "Gunpowder", "Low-sodium Salt"],
    20: ["Cement & Mortar", "Steel Deoxidizer", "Dairy Products", "Vitamin Supplements", "Plaster of Paris"],
    21: ["Aerospace Components", "Bicycle Frames", "Mercury Vapor Lamps", "Stadium Lighting"],
    22: ["Joint Replacements", "Jet Engines", "Paint Pigments", "Sunscreen", "Desalination Plants"],
    23: ["High-speed Steel Tools", "Nuclear Power Plants", "Superconducting Magnets", "Sulfuric Acid Catalyst"],
    24: ["Stainless Steel", "Chrome Plating", "Tanning Leather", "Magnetic Tapes", "Anti-corrosion Coatings"],
    25: ["Steel Production", "Dry Cell Batteries", "Aluminum Alloys", "Glass Decolorization", "Animal Feed"],
    26: ["Building Construction", "Automotive Parts", "Bridge Cables", "Magnets", "Tools & Cutlery"],
    27: ["Permanent Magnets", "Jet Turbines", "Cancer Radiotherapy", "Blue Glass Pigments", "High-speed Tool Steel"],
    28: ["Rechargeable Batteries", "Coins", "Guitar Strings", "Kitchen Sinks", "Electroplating"],
    29: ["Electrical Wiring", "Plumbing Pipes", "Cookware", "Statues (Bronze)", "Printed Circuit Boards"],
    30: ["Galvanizing Steel", "Brass Musical Instruments", "Sunscreen (Zinc Oxide)", "Die-casting", "Die-casting", "Alkaline Batteries"],
    31: ["LEDs", "Smartphones", "Semiconductors", "High-temperature Thermometers", "Blu-ray Players"],
    32: ["Fiber Optics", "Infrared Night Vision", "Camera Lenses", "Solar Panels", "Wide-angle Lenses"],
    33: ["Semiconductors", "Wood Preservation", "Lead-acid Batteries", "Glass Clarification"],
    34: ["Photocopiers", "Glass Tinting", "Anti-dandruff Shampoo", "Vitamin Supplements", "Solar Cells"],
    35: ["Flame Retardants", "Photography", "Water Purification", "Drilling Fluids", "Agriculture Chemicals"],
    36: ["High-speed Flash Lamps", "Fluorescent Tubes", "MRI Scanners", "Satellite Propellant"],
    37: ["Atomic Clocks", "Vacuum Tube Getters", "Fiber Optics", "Night Vision Devices"],
    38: ["Red Fireworks", "Nuclear Power (Isotopes)", "Optical Glass", "Phosphorescent Paints"],
    39: ["TV & Smartphone Screens", "Camera Lenses", "Superconductors", "Microwave Filters", "Laser Crystals"],
    40: ["Nuclear Reactor Cladding", "Chemical Pipelines", "Abrasives", "Ceramic Glazes", "Artificial Diamonds"],
    41: ["Jet Engines", "Superconducting Magnets", "MRI Machines", "Pipelines", "Jewelry"],
    42: ["Steel Alloys", "Industrial Lubricants", "Missile Parts", "Fertilizers", "Filaments"],
    43: ["Medical Imaging", "Nuclear Medicine", "Corrosion Protection", "Catalysts"],
    44: ["Electrical Contacts", "Solar Cells", "Jewelry Plating", "Chemical Synthesis Catalyst"],
    45: ["Catalytic Converters", "Searchlights", "Electrical Links", "Optical Fibers", "Glass Production"],
    46: ["Catalytic Converters", "Hydrogen Purification", "Dentistry", "Jewelry (White Gold)", "Electronics"],
    47: ["Photography", "Jewelry", "Electronics", "Solar Panels", "Mirrors"],
    48: ["NiCd Batteries", "Nuclear Control Rods", "Solar Panels", "Plastic Stabilizers", "Yellow Pigments"],
    49: ["LCD & Touchscreens", "Flat-panel Displays", "Low-melting Alloys", "Vacuum Seals"],
    50: ["Food Cans Lining", "Solder", "Bronze & Pewter", "Glass Coatings", "Anti-corrosion"],
    51: ["Flame Retardants", "Lead-acid Batteries", "Semiconductors", "Infrared Detectors"],
    52: ["Thermoelectric Devices", "Rubber Vulcanization", "Solar Panels", "Cast Iron Additive"],
    53: ["Antiseptics", "Thyroid Medical Treatment", "Photography", "Cloud Seeding", "Animal Feed"],
    54: ["Flash Lamps", "Ion Thrusters", "Medical Anesthesia", "Projector Lamps", "High-pressure Arc Lamps"],
    55: ["Atomic Clocks", "Oil Drilling Fluids", "Vacuum Tubes", "Scintillation Counters"],
    56: ["Drilling Mud", "X-ray Contrast Agents", "Vacuum Tubes", "Green Fireworks", "Glassmaking"],
    57: ["Camera Lenses", "Hybrid Car Batteries", "Carbon Arc Lighting", "Oil Cracking Catalyst"],
    58: ["Lighter Flints", "Catalytic Converters", "Glass Polishing", "Self-cleaning Ovens", "Carbon Arc Lamps"],
    59: ["Aircraft Engines", "Studio Lighting", "High-strength Magnets", "Flint Steel", "Yellow Glass"],
    60: ["Strong Neodymium Magnets", "High-power Lasers", "Glass Tinting", "Hard Disk Drives", "Wind Turbine Generators"],
    61: ["Nuclear Batteries", "Luminous Paint", "Thickness Gauges", "Portable X-ray Sources"],
    62: ["Samarium-Cobalt Magnets", "Cancer Treatment (Sm-153)", "Optical Lasers", "Neutron Absorbers"],
    63: ["TV Screen Phosphors", "Fluorescent Lamps", "Euro Banknote Security", "Lasers"],
    64: ["MRI Contrast Agents", "Nuclear Propulsion", "Magnetic Refrigeration", "Steel Additive"],
    65: ["Green Phosphors (TV/LED)", "Sonar Systems", "Fuel Cells", "High-temperature Alloys"],
    66: ["Control Rods (Nuclear)", "Hard Disk Magnets", "Electric Vehicle Motors", "Laser Materials"],
    67: ["High-strength Magnets", "Holmium Lasers (Surgery)", "Nuclear Reactor Control", "Glass Coloring"],
    68: ["Fiber Optic Amplifiers", "Pink Glass", "Nuclear Control Rods", "Vanadium Steel Alloy"],
    69: ["Portable X-ray Devices", "High-efficiency Lasers", "High-temperature Superconductors"],
    70: ["Stainless Steel Improvement", "Laser Crystals", "Atomic Clocks", "Portable X-ray Sources"],
    71: ["Petroleum Cracking", "Cancer Therapy", "LED Phosphors", "Computer Memory (Bubbles)"],
    72: ["Nuclear Reactor Control Rods", "Plasma Cutting", "Integrated Circuits", "Superalloys"],
    73: ["Capacitors (Smartphones)", "Surgical Implants", "Chemical Process Equipment", "Jet Engine Parts"],
    74: ["Light Bulb Filaments", "Cutting Tools (Tungsten Carbide)", "Radiation Shielding", "Rocket Nozzles"],
    75: ["Jet Engine Superalloys", "Petroleum Reforming", "Electrical Contacts", "Mass Spectrometers"],
    76: ["Fountain Pen Nibs", "Electrical Contacts", "Chemical Catalysts", "Fingerprint Detection"],
    77: ["Spark Plugs", "Crucibles for Crystals", "Chemical Catalysts", "Hardening Platinum Alloys"],
    78: ["Catalytic Converters", "Jewelry", "Laboratory Equipment", "Cancer Drugs (Cisplatin)"],
    79: ["Jewelry", "Electronics (Gold Plating)", "Investment Assets", "Dentistry", "Satellites"],
    80: ["Thermometers", "Barometers", "Fluorescent Lighting", "Dental Amalgam", "Gold Mining"],
    81: ["Infrared Detectors", "Low-melting Glass", "Gamma Radiation Detection", "Photoelectric Cells"],
    82: ["Lead-Acid Batteries", "Radiation Shielding", "Weights", "Roofing Materials", "Solder"],
    83: ["Pepto-Bismol (Medicine)", "Fire Sprinklers", "Low-toxicity Solder", "Cosmetics"],
    84: ["Static Eliminators", "Space Power Sources", "Neutron Sources", "Poison (Toxicology)"],
    85: ["Cancer Radiotherapy (Targeted)", "Scientific Research"],
    86: ["Cancer Treatment", "Earthquake Prediction", "Hydrology Tracing"],
    87: ["Scientific Research", "Atomic Spectroscopy"],
    88: ["Cancer Brachytherapy", "Luminous Paint (Historic)", "Neutron Sources"],
    89: ["Cancer Radiotherapy", "Neutron Sources", "Thermoelectric Generators"],
    90: ["Gas Lantern Mantles", "Nuclear Fuel", "Magnesium Alloys", "Camera Lenses (High Refraction)"],
    91: ["Scientific Research", "Nuclear Waste Analysis"],
    92: ["Nuclear Power Fuel", "Military Armor", "Radiation Shielding", "Counterweights"],
    93: ["Neutron Detection Instruments", "Nuclear Reactor Precursor", "Scientific Research"],
    94: ["Nuclear Weapons", "Spacecraft Power (RTGs)", "Nuclear Power Plants"],
    95: ["Smoke Detectors", "Neutron Sources", "Thickness Gauges (Industrial)"],
    96: ["Space Power Sources", "Alpha Particle X-ray Spectrometers", "Oil Well Logging"],
    97: ["Scientific Research", "Target for Synthesizing Heavier Elements"],
    98: ["Metal Detectors", "Neutron Radiography", "Cancer Treatment (Brachytherapy)", "Oil Well Logging"],
    99: ["Medical Research", "Scientific Studies on Radioactive Decay"],
    100: ["Scientific Research", "Study of Heavy Ion Interactions"],
    101: ["Scientific Research", "Education and Nuclear Discovery"],
    102: ["Scientific Research", "Heavy Element Synthesis Studies"],
    103: ["Scientific Research", "Transactinide Chemistry Studies"],
    104: ["Scientific Research Only"],
    105: ["Scientific Research Only"],
    106: ["Scientific Research Only"],
    107: ["Scientific Research Only"],
    108: ["Scientific Research Only"],
    109: ["Scientific Research Only"],
    110: ["Scientific Research Only"],
    111: ["Scientific Research Only"],
    112: ["Scientific Research Only"],
    113: ["Scientific Research Only"],
    114: ["Scientific Research Only"],
    115: ["Scientific Research Only"],
    116: ["Scientific Research Only"],
    117: ["Scientific Research Only"],
    118: ["Scientific Research Only"]
};



const environmentData = {
    1: { name: "Hydrogen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.5 Kg", points: ["Zero emissions at use", "High production energy", "Leaks impact ozone"] },
    2: { name: "Helium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "2.1 Kg", points: ["Non-renewable resource", "Escapes atmosphere", "Used in cryogenics"] },
    3: { name: "Lithium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "No", co2: "15 Kg", points: ["Water-intensive mining", "Toxic if leaked", "Essential for EVs"] },
    4: { name: "Beryllium", recyclable: "Yes", toxicity: "High", bioaccumulation: "No", co2: "120 Kg", points: ["Highly toxic dust", "Carcinogenic risk", "Rare metal impact"] },
    5: { name: "Boron", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Low", co2: "3.5 Kg", points: ["Low soil toxicity", "Used in glass recycling", "Safe in small doses"] },
    6: { name: "Carbon", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.2 Kg", points: ["Core of life cycles", "CO2 is greenhouse gas", "Graphite mining impact"] },
    7: { name: "Nitrogen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.8 Kg", points: ["Runoff causes algae", "Essential for fertilizer", "78% of atmosphere"] },
    8: { name: "Oxygen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.4 Kg", points: ["Essential for life", "Ozone layer protection", "Supports combustion"] },
    9: { name: "Fluorine", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "18 Kg", points: ["Strong greenhouse gases", "Highly reactive", "Water fluoridation issues"] },
    10: { name: "Neon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "4.5 Kg", points: ["Atmospheric extraction", "Chemically inert", "No soil impact"] },
    11: { name: "Sodium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "2.8 Kg", points: ["Highly reactive with water", "Abundant in oceans", "Salt runoff issues"] },
    12: { name: "Magnesium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "14 Kg", points: ["Lightweight recycling", "Energy-heavy extraction", "Safe for plants"] },
    13: { name: "Aluminium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "12 Kg", points: ["Infinite recyclability", "High energy refining", "Bauxite mining impact"] },
    14: { name: "Silicon", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "6.5 Kg", points: ["Silicon dust risk", "Basis of solar tech", "Abundant in crust"] },
    15: { name: "Phosphorus", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "Yes", co2: "5.2 Kg", points: ["Water eutrophication", "Mining depletion risk", "Vital for farming"] },
    16: { name: "Sulfur", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.6 Kg", points: ["Acid rain precursor", "Industrial byproduct", "Used in soil pH"] },
    17: { name: "Chlorine", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "1.5 Kg", points: ["Ozone layer damage", "Water disinfection", "Toxic gas risk"] },
    18: { name: "Argon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "3.2 Kg", points: ["Inert atmosphere", "Air separation source", "Safe for soil"] },
    19: { name: "Potassium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.1 Kg", points: ["Fertilizer essential", "High water solubility", "Low toxicity"] },
    20: { name: "Calcium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.9 Kg", points: ["Cement CO2 impact", "Soil neutralizer", "Safe for life"] },
    21: { name: "Scandium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "250 Kg", points: ["Rare earth impact", "High extraction cost", "Low toxicity"] },
    22: { name: "Titanium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "35 Kg", points: ["Corrosion resistant", "Refining is energy heavy", "Inert in soil"] },
    23: { name: "Vanadium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "28 Kg", points: ["Toxic to water life", "Used in green batteries", "Mining waste risk"] },
    24: { name: "Chromium", recyclable: "Yes", toxicity: "High", bioaccumulation: "Yes", co2: "22 Kg", points: ["Hexavalent form is toxic", "Groundwater pollutant", "Stainless steel use"] },
    25: { name: "Manganese", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "4.5 Kg", points: ["Essential nutrient", "Soil contamination risk", "Steel production use"] },
    26: { name: "Iron", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.9 Kg", points: ["Low recycling energy", "Massive mining scale", "Essential for life"] },
    27: { name: "Cobalt", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "25 Kg", points: ["Ethical mining issues", "Toxic to aquatic life", "Battery critical"] },
    28: { name: "Nickel", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "18 Kg", points: ["Tailings management", "Carcinogenic dust", "Highly recyclable"] },
    29: { name: "Copper", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "3.4 Kg", points: ["Infinite recycling", "Copper salts toxic", "Mining acid drainage"] },
    30: { name: "Zinc", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Yes", co2: "3.1 Kg", points: ["Toxic to fish", "Corrosion protection", "Crucial for health"] },
    31: { name: "Gallium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "140 Kg", points: ["LED & Solar usage", "Rare byproduct", "Low environmental risk"] },
    32: { name: "Germanium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "210 Kg", points: ["Fiber optics usage", "Rare metal impact", "Low toxicity"] },
    33: { name: "Arsenic", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "12 Kg", points: ["Groundwater poison", "Strict disposal needed", "Persistent toxin"] },
    34: { name: "Selenium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "Yes", co2: "15 Kg", points: ["Bio-accumulates easily", "Required in trace", "High dose toxicity"] },
    35: { name: "Bromine", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "4.5 Kg", points: ["Ozone depletion risk", "Flame retardant issues", "Toxic to organisms"] },
    36: { name: "Krypton", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "8 Kg", points: ["Atmospheric rare gas", "Non-toxic", "Used in lighting"] },
    37: { name: "Rubidium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "45 Kg", points: ["Reactive in water", "Rarely recycled", "Low soil impact"] },
    38: { name: "Strontium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "Yes", co2: "12 Kg", points: ["Radioactive isotope risk", "Similar to calcium", "Found in fireworks"] },
    39: { name: "Yttrium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "180 Kg", points: ["Rare earth tailings", "Dust is lung hazard", "Tech metal demand"] },
    40: { name: "Zirconium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "18 Kg", points: ["Corrosion resistant", "Low toxicity", "Nuclear fuel cladding"] },
    41: { name: "Niobium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "42 Kg", points: ["Hardening steel", "Low environmental risk", "Mining in Brazil"] },
    42: { name: "Molybdenum", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Yes", co2: "22 Kg", points: ["Essential micronutrient", "Mine site pollution", "Steel alloy usage"] },
    43: { name: "Technetium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Radioactive waste", "Medical tracer use", "Synthetic element"] },
    44: { name: "Ruthenium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "350 Kg", points: ["Rare catalyst metal", "Oxide is toxic", "Electronics demand"] },
    45: { name: "Rhodium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "2200 Kg", points: ["Extremely rare", "Catalytic converters", "High mining impact"] },
    46: { name: "Palladium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1400 Kg", points: ["Emission reduction", "High value recycling", "Rare earth mining"] },
    47: { name: "Silver", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "120 Kg", points: ["Antibacterial effect", "Toxic to microbes", "Highly recycled"] },
    48: { name: "Cadmium", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "14 Kg", points: ["Heavy metal poison", "Battery disposal risk", "Strictly regulated"] },
    49: { name: "Indium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "210 Kg", points: ["LCD screen critical", "Scarcity risk", "Low toxicity"] },
    50: { name: "Tin", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "16 Kg", points: ["Artisanal mining risk", "Non-toxic plating", "Low melting energy"] },
    51: { name: "Antimony", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "18 Kg", points: ["Flame retardant risk", "Toxic to inhale", "Mining tailings"] },
    52: { name: "Tellurium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "No", co2: "140 Kg", points: ["Rare solar material", "Smell hazard", "Toxicity in water"] },
    53: { name: "Iodine", recyclable: "No", toxicity: "Medium", bioaccumulation: "Yes", co2: "6 Kg", points: ["Essential for health", "Water disinfection", "Seaweed source"] },
    54: { name: "Xenon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "12 Kg", points: ["Extracted from air", "Anesthetic use", "Safe greenhouse gas"] },
    55: { name: "Cesium", recyclable: "No", toxicity: "Medium", bioaccumulation: "Yes", co2: "55 Kg", points: ["Highly reactive", "Isotope safety risk", "Rarely recycled"] },
    56: { name: "Barium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "8 Kg", points: ["Drilling mud impact", "Toxic if soluble", "Mining waste"] },
    57: { name: "Lanthanum", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "160 Kg", points: ["EV battery usage", "Rare earth mining", "Low aquatic risk"] },
    58: { name: "Cerium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "140 Kg", points: ["Catalytic use", "Self-cleaning ovens", "Abundant rare earth"] },
    59: { name: "Praseodymium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "280 Kg", points: ["Magnet production", "Mining impact high", "Low toxicity"] },
    60: { name: "Neodymium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "320 Kg", points: ["Critical for wind power", "Mining radioactivity", "Highly recycled magnets"] },
    61: { name: "Promethium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Radioactive lanthanide", "Luminous paint use", "Synthetic only"] },
    62: { name: "Samarium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "240 Kg", points: ["High-power magnets", "Cancer treatment use", "Mining site risk"] },
    63: { name: "Europium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "410 Kg", points: ["TV screen phosphors", "Most reactive rare earth", "Euro banknote security"] },
    64: { name: "Gadolinium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "No", co2: "190 Kg", points: ["MRI contrast agent", "Water supply pollution", "Nuclear control rods"] },
    65: { name: "Terbium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "520 Kg", points: ["Green phosphor source", "Critical supply risk", "Magnet alloy use"] },
    66: { name: "Dysprosium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "480 Kg", points: ["EV motor magnets", "High mining impact", "Resource scarcity"] },
    67: { name: "Holmium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "310 Kg", points: ["Highest magnetic moment", "Laser surgery use", "Rare earth mining"] },
    68: { name: "Erbium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "290 Kg", points: ["Fiber optic cables", "Pink glass pigment", "Nuclear absorber"] },
    69: { name: "Thulium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "650 Kg", points: ["Portable X-rays", "Extremely rare metal", "Low biological role"] },
    70: { name: "Ytterbium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "220 Kg", points: ["Stainless steel additive", "Atomic clock precision", "Rare earth toxicity"] },
    71: { name: "Lutetium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "800 Kg", points: ["Oil refinery catalyst", "Positron emission tomography", "Very high cost"] },
    72: { name: "Hafnium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "110 Kg", points: ["Nuclear reactor rods", "Microprocessor logic", "Mining byproduct"] },
    73: { name: "Tantalum", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "180 Kg", points: ["Conflict mineral risk", "Capacitor production", "Highly biocompatible"] },
    74: { name: "Tungsten", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "25 Kg", points: ["Highest melting point", "High density hazard", "Military/Industrial use"] },
    75: { name: "Rhenium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "3400 Kg", points: ["Jet engine superalloys", "Extremely rare", "High recycling value"] },
    76: { name: "Osmium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "2800 Kg", points: ["Densest element", "Oxide is lethal", "Hardest metal alloy"] },
    77: { name: "Iridium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1900 Kg", points: ["Corrosion resistance", "Asteroid impact marker", "Spark plug tips"] },
    78: { name: "Platinum", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "2900 Kg", points: ["Catalytic converters", "Cancer drug base", "High social impact"] },
    79: { name: "Gold", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "31000 Kg", points: ["Artisanal mining risk", "Mercury pollution link", "Infinite recycling"] },
    80: { name: "Mercury", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "35 Kg", points: ["Neurotoxin hazard", "Artisanal gold mining", "Global treaty control"] },
    81: { name: "Thallium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "45 Kg", points: ["Extremely poisonous", "Optical glass use", "Mining runoff risk"] },
    82: { name: "Lead", recyclable: "Yes", toxicity: "High", bioaccumulation: "Yes", co2: "1.8 Kg", points: ["Neurotoxic impact", "Battery recycling hub", "Global health burden"] },
    83: { name: "Bismuth", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "12 Kg", points: ["Lead-free solder", "Non-toxic heavy metal", "Cosmetic pigment"] },
    84: { name: "Polonium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Extreme radioactivity", "Alpha particle emitter", "Stat-brush use"] },
    85: { name: "Astatine", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Rarest natural element", "Short half-life", "Cancer therapy potential"] },
    86: { name: "Radon", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Natural gas hazard", "Lung cancer risk", "Geology tracer"] },
    87: { name: "Francium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Highly unstable", "Extremely reactive", "Nuclear research only"] },
    88: { name: "Radium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Historical glow paint", "High radiation risk", "Decay of uranium"] },
    89: { name: "Actinium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Neutron source", "Radio-immunotherapy", "Highly radioactive"] },
    90: { name: "Thorium", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "85 Kg", points: ["Nuclear fuel potential", "Naturally radioactive", "Mining byproduct"] },
    91: { name: "Protactinium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Radioactive actinide", "High radiological risk", "Rare nuclear byproduct"] },
    92: { name: "Uranium", recyclable: "Yes", toxicity: "High", bioaccumulation: "Yes", co2: "220 Kg", points: ["Nuclear energy fuel", "Heavy metal poisoning", "Leaching in mining"] },
    93: { name: "Neptunium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Transuranic waste", "Long-term radiation", "Reactor byproduct"] },
    94: { name: "Plutonium", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Weapon grade risk", "Extreme bio-hazard", "Nuclear power byproduct"] },
    95: { name: "Americium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Smoke detector source", "Alpha/Gamma emitter", "Long-lived waste"] },
    96: { name: "Curium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Space power use", "Intense heat decay", "High radiation field"] },
    97: { name: "Berkelium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Synthetic research", "Beta emitter hazard", "Nuclear target use"] },
    98: { name: "Californium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Neutron radiation", "High cost/rarity", "Cancer therapy use"] },
    99: { name: "Einsteinium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Intense radioactivity", "Visible glow decay", "Research only"] },
    100: { name: "Fermium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Short half-life", "Spontaneous fission", "Heavy ion product"] },
    101: { name: "Mendelevium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Synthetic actinide", "Alpha decay hazard", "Rare research metal"] },
    102: { name: "Nobelium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Accelerator product", "Extreme instability", "Toxic radioisotope"] },
    103: { name: "Lawrencium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Final actinide", "Intense decay field", "Relativistic effects"] },
    104: { name: "Rutherfordium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Superheavy metal", "Relativistic chemistry", "Nuclear lab safety"] },
    105: { name: "Dubnium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Highly unstable", "Fission hazard", "Synthetic research"] },
    106: { name: "Seaborgium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Alpha emitter", "Short-lived atoms", "Accelerator focus"] },
    107: { name: "Bohrium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Extreme instability", "Decay chain hazard", "Cold fusion product"] },
    108: { name: "Hassium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Toxic oxide vapor", "Superheavy research", "Intense radiation"] },
    109: { name: "Meitnerium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Rare synthetic", "Heavy ion fusion", "Decay monitoring"] },
    110: { name: "Darmstadtium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Alpha decay risk", "Relativistic speed", "Laboratory-made"] },
    111: { name: "Roentgenium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["High energy decay", "Gold-like chemistry", "Radiological risk"] },
    112: { name: "Copernicium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Volatile metal gas", "Relativistic atoms", "Extreme hazard"] },
    113: { name: "Nihonium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Japanese discovery", "P-block superheavy", "Instant decay"] },
    114: { name: "Flerovium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Island of stability", "Noble-like gas", "Radiation shield"] },
    115: { name: "Moscovium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Superheavy metal", "Alpha chain hazard", "Nuclear research"] },
    116: { name: "Livermorium", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Intense instability", "Chalcogen group", "Synthetic only"] },
    117: { name: "Tennessine", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Synthetic halogen", "Extreme decay speed", "Radiation danger"] },
    118: { name: "Oganesson", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "N/A", points: ["Heaviest element", "Noble gas group", "Ultimate research"] }
};




const safetyData = {
    1: { 
        level: "HIGH RISK", status: "Flammable Gas", isSafe: false, 
        advices: [
            "Extremely flammable gas, keep away from fire",
            "Store cylinders in a very cool place",
            "Colorless gas, check for leaks with sensors",
            "Avoid static electricity when handling this gas",
            "Always use specialized non-sparking safety tools",
            "Highly explosive when mixed with outdoor air"
        ],
        locations: ["Open Field", "Gas Laboratory", "Ventilated Bunker", "Emergency Test Zone"],
        precautions: [
            "Keep away from heat and sparks",
            "Use specialized non-sparking safety tools",
            "Store cylinders in upright secured position",
            "Monitor area for potential gas leaks",
            "Ground all equipment to prevent static",
            "Ensure maximum ventilation in work space"
        ] 
    },
    2: { 
        level: "LOW RISK", status: "Safe / Natural", isSafe: true, 
        advices: [
            "Inert gas, does not react with chemicals",
            "Safe for balloons and industrial cooling systems",
            "Do not inhale directly from high pressure",
            "Non-toxic and very safe for general use",
            "Store tanks away from direct hot sunlight",
            "Always maintain good ventilation in closed rooms"
        ],
        locations: ["Home", "Classroom", "Laboratory", "Public Parks"],
        precautions: [
            "Avoid using high pressure gas tanks",
            "Ensure constant fresh air ventilation flow",
            "Keep tanks away from small children",
            "Check valve integrity before every use",
            "Store in cool and dry place",
            "Handle heavy cylinders with safety gear"
        ] 
    },
    3: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Reacts violently with any contact with water",
            "Store strictly under protective mineral oil only",
            "Causes severe chemical burns on human skin",
            "Handle with dry stainless steel tongs only",
            "Keep in airtight containers to avoid moisture",
            "Always wear full face protection and gloves"
        ],
        locations: ["Dry Chemistry Lab", "Fume Hood", "Hazardous Storage", "Specialty Metal Lab"],
        precautions: [
            "Store strictly under protective mineral oil",
            "Wear high grade chemical safety goggles",
            "Avoid any contact with liquid water",
            "Handle only with dry stainless tongs",
            "Use moisture-free containers for storage",
            "Wear heat-resistant gloves during handling"
        ] 
    },
    4: { 
        level: "HIGH RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Highly toxic dust, avoid any direct inhalation",
            "Potential carcinogenic hazard to human health",
            "Handle only inside a certified safety cabinet",
            "Wear a full body protective safety suit",
            "Always wash hands after handling this metal",
            "Store in a secure and locked location"
        ],
        locations: ["Enclosed Lab", "Industrial Facility", "Safety Cabinet", "Toxicology Center"],
        precautions: [
            "Use HEPA respiration masks for safety",
            "Avoid creating any fine metal dust",
            "Wear a full body safety suit",
            "Shower immediately after handling this metal",
            "Work inside certified safety cabinets only",
            "Follow strict hazardous waste disposal rules"
        ] 
    },
    5: { 
        level: "LOW RISK", status: "Stable / Safe", isSafe: true, 
        advices: [
            "Safe solid material in its normal form",
            "Used safely in medical and industrial fields",
            "Non-toxic, but avoid creating fine dust",
            "Store in a dry and cool environment",
            "Wash hands thoroughly after use every time",
            "Stable under standard room temperature conditions"
        ],
        locations: ["Home", "School Lab", "Industrial Lab", "Medical Room"],
        precautions: [
            "Keep in dry and cool storage",
            "Avoid any direct contact with eyes",
            "Wash hands thoroughly after every use",
            "Store at standard room temperature conditions",
            "Avoid creating airborne solid dust particles",
            "Follow standard laboratory hygiene protocols"
        ] 
    },
    6: { 
        level: "LOW RISK", status: "Safe / Natural", isSafe: true, 
        advices: [
            "Essential for life, safe in solid form",
            "Stable and non-reactive under normal conditions",
            "Safe to touch with bare hands daily",
            "Keep away from very strong oxidizing acids",
            "Avoid inhaling fine carbon dust or soot",
            "Store in a clean and dry place"
        ],
        locations: ["Anywhere Outdoor", "Home", "Kitchen", "Science Lab"],
        precautions: [
            "Keep away from strong oxidizing acids",
            "Avoid inhaling fine carbon dust particles",
            "Follow standard daily hygiene safety rules",
            "Store in cool and dry places",
            "Protect from extreme heat and fire",
            "Keep storage area clean and organized"
        ] 
    },
    7: { 
        level: "LOW RISK", status: "Stable Gas", isSafe: true, 
        advices: [
            "Makes up most of the Earth's atmosphere",
            "Non-flammable gas, safe for food packaging",
            "Handle liquid form with extreme safety care",
            "Ensure room has a constant fresh airflow",
            "Check all pressure valves for any leaks",
            "Keep cylinders secured in an upright position"
        ],
        locations: ["Home", "Food Factory", "Laboratory", "Hospitals"],
        precautions: [
            "Ensure constant fresh air ventilation flow",
            "Handle liquid form with extreme care",
            "Avoid any direct skin or eye contact",
            "Check all pressure valves for leaks",
            "Secure gas cylinders in upright position",
            "Monitor oxygen levels in closed rooms"
        ] 
    },
    8: { 
        level: "LOW RISK", status: "Vital / Safe", isSafe: true, 
        advices: [
            "Vital for breathing and supporting human life",
            "Highly stable gas under normal room pressure",
            "Supports combustion, keep away from open flames",
            "Keep away from any grease or oils",
            "No smoking near high concentration oxygen tanks",
            "Store cylinders in a well ventilated area"
        ],
        locations: ["Outdoor Area", "Hospital", "Space Station", "Diving Centers"],
        precautions: [
            "Keep away from any grease or oils",
            "Strictly no smoking near oxygen tanks",
            "Check gas regulator safety before use",
            "Secure all cylinders from falling down",
            "Store in a well ventilated area",
            "Avoid using oxygen near open flames"
        ] 
    },
    9: { 
        level: "HIGH RISK", status: "Dangerous Gas", isSafe: false, 
        advices: [
            "Extremely corrosive gas, handle with extreme care",
            "Fatal if inhaled even in small doses",
            "Reacts violently with almost all metal surfaces",
            "Causes severe and deep chemical skin burns",
            "Use only in specialized sealed gas chambers",
            "Wear high-grade specialized gas masks always"
        ],
        locations: ["Specialized Gas Lab", "Toxic Exhaust Hood", "Research Center", "Sealed Chamber"],
        precautions: [
            "Use specialized high grade gas masks",
            "Check equipment regularly for chemical corrosion",
            "Use double-sealed containers for storage",
            "Remote handling is required for safety",
            "Install automatic gas leak detection sensors",
            "Neutralize spills with appropriate chemical agents"
        ] 
    },
    10: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-reactive noble gas, very safe to use",
            "Non-toxic and used widely in neon signs",
            "Safe for general use in laboratory lighting",
            "Monitor gas pressure in all glass tubes",
            "Prevent bulb breakage to avoid sharp glass",
            "Check all electrical connections before turning on"
        ],
        locations: ["Home", "Lighting Factory", "Laboratory", "Neon Sign Shop"],
        precautions: [
            "Monitor gas pressure inside glass tubes",
            "Safe for general and laboratory use",
            "Check all electrical connections for safety",
            "Prevent glass bulb breakage and cuts",
            "Store tanks in cool dry areas",
            "Handle large cylinders with proper carts"
        ] 
    },
    11: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Explodes violently when touching any water",
            "Store strictly under protective mineral oil",
            "Causes immediate severe skin chemical burns",
            "Handle only with dry metal tools",
            "Never use water on sodium fires",
            "Always wear a full face shield"
        ],
        locations: ["Chemical Lab", "Fume Hood", "Controlled Area", "Safe Storage Vault"],
        precautions: [
            "Use dry chemical fire extinguishers only",
            "Wear a full protective face shield",
            "Handle only with dry stainless tongs",
            "Keep away from any water source",
            "Store strictly under dry mineral oil",
            "Keep in a locked safety cabinet"
        ] 
    },
    12: { 
        level: "MEDIUM RISK", status: "Flammable Metal", isSafe: false, 
        advices: [
            "Burns with a very bright light",
            "Avoid inhaling white magnesium oxide smoke",
            "Keep metal strips away from moisture",
            "Use Class D fire extinguishers only",
            "Wear UV goggles when burning metal",
            "Stable in solid mass at room temp"
        ],
        locations: ["Science Lab", "Metal Workshop", "Outdoor Safe Zone", "Fireproof Testing Bay"],
        precautions: [
            "Avoid inhaling white metallic oxide fumes",
            "Use Class D fire extinguishers only",
            "Protect metal from humidity and moisture",
            "Wear UV protective safety goggles always",
            "Keep away from strong acidic chemicals",
            "Store in fireproof metal containers"
        ] 
    },
    13: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and very safe for food",
            "Corrosion resistant under normal daily use",
            "Avoid contact with liquid mercury metal",
            "Stable even at very high temperatures",
            "Wear gloves to avoid sharp edges",
            "Recycle scrap metal for environmental safety"
        ],
        locations: ["Home", "Kitchen", "Aluminium Factory", "Construction Site"],
        precautions: [
            "Avoid any contact with liquid mercury",
            "Stable under very high heat conditions",
            "Wear gloves for sharp metal edges",
            "Follow standard industrial workshop safety rules",
            "Keep surfaces clean and free of grease",
            "Store in dry and organized racks"
        ] 
    },
    14: { 
        level: "MEDIUM RISK", status: "Irritant Solid", isSafe: false, 
        advices: [
            "Dust causes mild respiratory tract irritation",
            "Non-toxic solid in bulk crystal form",
            "Wear a mask when cutting wafers",
            "Wash skin if exposed to dust",
            "Ensure proper industrial dust extraction systems",
            "Use protective eyewear during mechanical work"
        ],
        locations: ["Industrial Lab", "Workshop", "Testing Room", "Electronics Center"],
        precautions: [
            "Wear a protective dust mask always",
            "Wash skin thoroughly if dust exposed",
            "Ensure localized dust extraction is active",
            "Use protective eyewear during all work",
            "Avoid creating fine airborne dust particles",
            "Store in a cool dry place"
        ] 
    },
    15: { 
        level: "HIGH RISK", status: "Reactive / Toxic", isSafe: false, 
        advices: [
            "Can ignite spontaneously in warm air",
            "Highly toxic if swallowed by mistake",
            "Always store safely under deep water",
            "Causes long-term bone and tissue damage",
            "Work only in ventilated fume hoods",
            "Wear heavy-duty chemical resistant gloves"
        ],
        locations: ["Toxic Substance Lab", "Water-Safe Bench", "Emergency Unit", "Restricted Zone"],
        precautions: [
            "Keep metal stored under deep water",
            "Wear heavy-duty chemical resistant gloves",
            "Secure in a locked storage vault",
            "Work inside a ventilated fume hood",
            "Avoid contact with air or heat",
            "Wear a full face safety shield"
        ] 
    },
    16: { 
        level: "MEDIUM RISK", status: "Reactive Solid", isSafe: false, 
        advices: [
            "Flammable dust, keep from open heat",
            "Low toxicity but avoid skin contact",
            "Produces pungent odor when burnt slowly",
            "Keep away from strong oxidizing chemicals",
            "Wash hands thoroughly after handling powder",
            "Use in well-ventilated open testing areas"
        ],
        locations: ["Outdoor Area", "Chemistry Lab", "Ventilated Shop", "Open Testing Bay"],
        precautions: [
            "Avoid creating dangerous airborne dust clouds",
            "Keep away from strong oxidizing chemicals",
            "Wash hands thoroughly after every use",
            "Use localized exhaust ventilation systems always",
            "Protect from open flames and sparks",
            "Store in tightly sealed plastic containers"
        ] 
    },
    17: { 
        level: "HIGH RISK", status: "Toxic Gas", isSafe: false, 
        advices: [
            "Severe lung irritant, do not breathe",
            "Strong oxidizer, keep away from fuel",
            "Highly corrosive to most common metals",
            "Fatal in high doses, use sensors",
            "Check for leaks using ammonia solution",
            "Keep emergency safety showers very nearby"
        ],
        locations: ["Sealed Gas Chamber", "Fume Hood", "Chemical Plant", "Safety Enclosure"],
        precautions: [
            "Use specialized chlorine-rated gas masks",
            "Check all valves for gas leaks",
            "Install automatic gas detection safety sensors",
            "Keep emergency showers ready for use",
            "Work only in high-flow fume hoods",
            "Wear acid-resistant full body suit"
        ] 
    },
    18: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-toxic and non-flammable noble gas",
            "Does not react with any chemicals",
            "Monitor oxygen levels in small rooms",
            "Check tank pressure valves before use",
            "Use only in well ventilated areas",
            "Always secure cylinders in upright position"
        ],
        locations: ["Home", "Laboratory", "Classroom", "Industrial Site"],
        precautions: [
            "Monitor oxygen levels in work area",
            "Check tank pressure before using gas",
            "Use in a well ventilated area",
            "Secure gas cylinders in upright position",
            "Inspect valves for mechanical leaks regularly",
            "Store in cool and dry locations"
        ] 
    },
    19: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Violent explosive reaction with any water",
            "Causes immediate deep skin tissue burns",
            "Store under vacuum or mineral oil",
            "Soft metal, easy to cut safely",
            "Handle with dry stainless steel forceps",
            "Wear flame-resistant coats and face shields"
        ],
        locations: ["Professional Lab", "Glove Box", "Fume Hood", "Chemical Bunker"],
        precautions: [
            "Ensure zero contact with liquid water",
            "Full face shield is strictly required",
            "Handle with dry stainless steel forceps",
            "Wear a flame-resistant laboratory coat",
            "Store strictly under protective mineral oil",
            "Work only in inert gas atmospheres"
        ] 
    },
    20: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Reacts with moisture to form hydrogen",
            "Fine dust is a fire hazard",
            "Stable in very dry air conditions",
            "Essential nutrient but handle carefully raw",
            "Store in cool and dry containers",
            "Keep away from all strong acids"
        ],
        locations: ["Laboratory", "Agricultural Site", "Industrial Testing", "Geology Room"],
        precautions: [
            "Store in strictly dry environmental conditions",
            "Avoid any direct skin or eye contact",
            "Use protective chemical resistant gloves",
            "Keep away from all strong acids",
            "Avoid creating fine metal dust particles",
            "Follow standard chemical storage safety rules"
        ] 
    },
    21: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Very low toxicity, safe for handling",
            "Stable solid under most normal conditions",
            "No specific chemical hazards for users",
            "Wash hands after handling fine dust",
            "Use standard industrial tool safety rules",
            "Recycle all metal scrap properly"
        ],
        locations: ["Home", "Workshop", "Art Studio", "Metallurgy Lab"],
        precautions: [
            "No specific chemical hazard for users",
            "Wash hands after handling metal dust",
            "Follow standard industrial tool safety rules",
            "Recycle all metal scrap properly always",
            "Wear safety glasses for mechanical work",
            "Keep the workspace clean and organized"
        ] 
    },
    22: { 
        level: "LOW RISK", status: "Biocompatible", isSafe: true, 
        advices: [
            "Non-toxic metal used in medical implants",
            "Highly resistant to any chemical corrosion",
            "Safe to touch with bare skin",
            "Avoid high-speed grinding without water cooling",
            "Handle with clean gloves for purity",
            "Always sterilize if used for medicine"
        ],
        locations: ["Hospital", "Clinic", "Research Center", "Testing Lab"],
        precautions: [
            "Avoid high-speed grinding without water cooling",
            "Handle with clean gloves for purity",
            "Keep surfaces free of any grease",
            "Sterilize properly if used in medicine",
            "Wear eye protection against metal chips",
            "Use clean tools for handling implants"
        ] 
    },
    23: { 
        level: "MEDIUM RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Metal dust is toxic if inhaled",
            "Avoid creating fine airborne metal particles",
            "Stable in bulk solid form daily",
            "Potential industrial health hazard for workers",
            "Wear a respiratory mask during processing",
            "Ensure good airflow in the workspace"
        ],
        locations: ["Mining Facility", "Metallurgy Lab", "Factory Exhaust", "Safety Booth"],
        precautions: [
            "Wear a respiratory mask during work",
            "Avoid ingestion of any metal particles",
            "Wash hands thoroughly after handling metal",
            "Ensure good industrial ventilation in area",
            "Wear safety goggles for eye protection",
            "Follow strict industrial hygiene protocols always"
        ] 
    },
    24: { 
        level: "MEDIUM RISK", status: "Toxic / Irritant", isSafe: false, 
        advices: [
            "Hexavalent forms are extremely toxic chemicals",
            "Can cause severe skin allergy reactions",
            "Highly resistant to rust and corrosion",
            "Handle always with thick rubber gloves",
            "Wear eye protection during plating work",
            "Monitor air quality in industrial plants"
        ],
        locations: ["Electroplating Shop", "Industrial Lab", "Treatment Plant", "Quality Control"],
        precautions: [
            "Wear thick chemical resistant rubber gloves",
            "Use eye protection for chemical splashes",
            "Avoid any direct skin or eye contact",
            "Monitor air quality in plating shops",
            "Wash immediately if skin contact occurs",
            "Follow hazardous chemical waste disposal rules"
        ] 
    },
    25: { 
        level: "MEDIUM RISK", status: "Essential Irritant", isSafe: false, 
        advices: [
            "Avoid inhaling fine black metal dust",
            "Essential nutrient in very small doses",
            "Stable solid under standard room conditions",
            "Wear safety glasses against metal filings",
            "Always wear standard industrial work gloves",
            "Store in a dry and cool place"
        ],
        locations: ["Steel Plant", "Nutrition Lab", "Geology Lab", "Testing Center"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Protect eyes from flying metal filings",
            "Wear standard industrial protective work gloves",
            "Store in a dry and cool area",
            "Wash hands before eating or smoking",
            "Maintain clean workspace to prevent dust"
        ] 
    },
    26: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and essential for human blood",
            "Rusts quickly in high moisture areas",
            "Stable and very safe to handle",
            "Keep dry to prevent oxidation rust",
            "Wear gloves for sharp metal edges",
            "Standard workshop safety rules always apply"
        ],
        locations: ["Home", "Construction Site", "Workshop", "Garage"],
        precautions: [
            "Keep dry to avoid oxidation rust",
            "Wear gloves for sharp metal edges",
            "Follow standard industrial workshop safety rules",
            "Prevent iron scale buildup on surfaces",
            "Store in a dry organized place",
            "Keep away from strong corrosive chemicals"
        ] 
    },
    27: { 
        level: "MEDIUM RISK", status: "Potential Allergen", isSafe: false, 
        advices: [
            "Can cause significant skin allergy risks",
            "Metal dust is toxic if inhaled",
            "Stable solid metal with magnetic properties",
            "Avoid direct skin contact for long",
            "Wash hands thoroughly after handling magnets",
            "Keep away from extreme heat sources"
        ],
        locations: ["Magnetic Research Lab", "Metal Shop", "Electronic Factory", "Testing Bay"],
        precautions: [
            "Avoid direct skin contact for long",
            "Follow specialized magnet handling safety rules",
            "Wash after handling magnetic materials thoroughly",
            "Wear safety goggles during metal cutting",
            "Store away from all fire hazards",
            "Ensure proper exhaust in the workshop"
        ] 
    },
    28: { 
        level: "MEDIUM RISK", status: "Skin Sensitizer", isSafe: false, 
        advices: [
            "Common allergen, avoid direct skin contact",
            "Potential carcinogenic risk in dust form",
            "Highly resistant to chemical corrosion processes",
            "Stable solid at normal room temperatures",
            "Wear nitrile gloves when handling salts",
            "Properly dispose of all chemical waste"
        ],
        locations: ["Plating Lab", "Jewelry Workshop", "Battery Factory", "Industrial Site"],
        precautions: [
            "Use protective barrier cream on skin",
            "Wear chemical resistant nitrile safety gloves",
            "Avoid breathing any toxic chemical vapors",
            "Follow proper hazardous waste disposal methods",
            "Wash hands before leaving work area",
            "Wear eye protection during chemical handling"
        ] 
    },
    29: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Natural antimicrobial properties on its surface",
            "Non-toxic metal, safe for plumbing pipes",
            "Highly conductive for electricity and heat",
            "Essential for maintaining good human health",
            "Avoid contact with strong ammonia liquids",
            "Keep copper surfaces clean and dry"
        ],
        locations: ["Home", "Electrical Shop", "Hospital", "Kitchen"],
        precautions: [
            "Avoid contact with strong ammonia liquids",
            "Keep all copper surfaces clean daily",
            "Recycle all metal scrap efficiently always",
            "Follow standard industrial material handling rules",
            "Wear gloves when handling heavy parts",
            "Store in dry environment to prevent"
        ] 
    },
    30: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Essential nutrient for the human body",
            "Non-toxic and safe for general handling",
            "Corrosion resistant coating for other metals",
            "Avoid contact with strong acidic liquids",
            "Stable solid under all normal uses",
            "Handle heavy metal bars with care"
        ],
        locations: ["Home", "Health Clinic", "Laboratory", "Metal Factory"],
        precautions: [
            "Avoid contact with strong acidic liquids",
            "Follow standard hygiene and washing rules",
            "Stable material under all normal uses",
            "Handle heavy metal bars with care",
            "Wear gloves for industrial material handling",
            "Store in a dry organized warehouse"
        ] 
    },
    31: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Melts easily in your warm hand",
            "Non-toxic metal safe for science demos",
            "Stable solid at standard room temperature",
            "Avoid contact with aluminum metal surfaces",
            "Store in clean plastic storage containers",
            "Do not ingest this metal material"
        ],
        locations: ["Home Lab", "Science Classroom", "Electronics Lab", "Art Studio"],
        precautions: [
            "Handle with gloves to keep metal clean",
            "Avoid contact with aluminum surfaces always",
            "Store in clean plastic storage containers",
            "Do not ingest or swallow metal material",
            "Keep away from high heat sources",
            "Maintain clean workspace during all experiments"
        ] 
    },
    32: { 
        level: "LOW RISK", status: "Stable Metalloid", isSafe: true, 
        advices: [
            "Non-toxic solid used in fiber optics",
            "Stable material when exposed to air",
            "Semiconductor properties for high-tech electronics",
            "Wear eye protection when cutting crystals",
            "Avoid inhaling very fine crystal dust",
            "Handle with clean-room safety gloves"
        ],
        locations: ["Tech Lab", "Clean Room", "Optical Center", "Semiconductor Plant"],
        precautions: [
            "Wear eye protection when cutting crystals",
            "Avoid inhaling fine crystal dust particles",
            "Handle with clean-room safety gloves only",
            "Store in a dry and cool environment",
            "Use specialized tools for handling wafers",
            "Follow standard clean room safety protocols"
        ] 
    },
    33: { 
        level: "HIGH RISK", status: "Highly Toxic", isSafe: false, 
        advices: [
            "Potent poison, handle with extreme caution",
            "Known carcinogenic hazard to human health",
            "Avoid any inhalation of toxic dust",
            "Strict laboratory handling protocols are required",
            "Use only inside certified safety cabinets",
            "Zero environmental release is strictly mandatory"
        ],
        locations: ["Toxicology Lab", "Safety Cabinet", "Biohazard Zone", "Special Waste Unit"],
        precautions: [
            "Wear full respiratory protection at all times",
            "Zero environmental release is strictly mandatory",
            "Follow all hazardous waste safety protocols",
            "Wear chemical-resistant apron and heavy gloves",
            "Work only inside certified safety hoods",
            "Monitor area with specialized toxic sensors"
        ] 
    },
    34: { 
        level: "MEDIUM RISK", status: "Essential Irritant", isSafe: false, 
        advices: [
            "Toxic in very high concentrated doses",
            "Produces a very pungent chemical odor",
            "Strong irritant to skin and eyes",
            "Essential trace element for human health",
            "Use only in ventilated fume hoods",
            "Wash thoroughly after every work session"
        ],
        locations: ["Glass Factory", "Health Lab", "Chemical Testing", "Industrial Room"],
        precautions: [
            "Use only in well ventilated hoods",
            "Avoid any direct contact with skin",
            "Wash hands thoroughly after work sessions",
            "Store away from all strong acids",
            "Wear safety goggles for eye protection",
            "Ensure proper air filtration in laboratory"
        ] 
    },
    35: { 
        level: "HIGH RISK", status: "Corrosive Liquid", isSafe: false, 
        advices: [
            "Highly volatile liquid, produces toxic vapors",
            "Causes severe and painful chemical burns",
            "Always store in very cool areas",
            "Strong oxidizer, keep away from fuels",
            "Wear specialized acid-resistant safety gloves",
            "Keep emergency showers ready for use"
        ],
        locations: ["Fume Hood", "Advanced Chem Lab", "Hazardous Site", "Chemical Storage"],
        precautions: [
            "Wear specialized acid-resistant safety gloves",
            "Use specialized vapor mask for safety",
            "Keep emergency safety showers ready",
            "Store in ventilated chemical safety cabinets",
            "Handle bottles with extreme care",
            "Neutralize spills immediately with appropriate agents"
        ] 
    },
    36: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-reactive and non-toxic noble gas",
            "Naturally occurring in the Earth's air",
            "Stable gas even under high pressure",
            "Monitor for potential oxygen displacement risks",
            "Secure all gas cylinders very tightly",
            "Check all valves for gas leaks"
        ],
        locations: ["Home", "Lighting Lab", "Space Research", "Industrial Hall"],
        precautions: [
            "Monitor area for oxygen displacement risks",
            "Secure all gas cylinders very tightly",
            "Check all valves for gas leaks",
            "Store cylinders in cool dry areas",
            "Handle heavy tanks with safety carts",
            "Ensure room ventilation is active"
        ] 
    },
    37: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Ignites spontaneously in open moist air",
            "Violent explosive reaction with any water",
            "Causes severe and deep skin burns",
            "Store strictly in vacuum or oil",
            "Handle only in argon gas atmosphere",
            "Face shields are mandatory for safety"
        ],
        locations: ["Inert Atmosphere Lab", "Glove Box", "Specialty Metal Lab", "Controlled Vault"],
        precautions: [
            "Handle only in argon atmosphere safely",
            "Zero environmental moisture allowed in lab",
            "Full face shield is strictly mandatory",
            "Store strictly in sealed glass ampoules",
            "Use remote handling tools for safety",
            "Keep away from all fire hazards"
        ] 
    },
    38: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Reacts quickly with environmental moisture",
            "Fine metal dust is highly flammable",
            "Stable solid in bulk mass form",
            "Keep away from all water sources",
            "Avoid creating dangerous airborne dust clouds",
            "Use dry sand for small fires"
        ],
        locations: ["Pyrotechnic Lab", "Chemistry Room", "Vacuum Chamber", "Safety Bunker"],
        precautions: [
            "Keep away from all water sources",
            "Avoid creating dangerous airborne dust clouds",
            "Use dry sand for metal fires",
            "Wear flame-retardant safety gear during work",
            "Store in airtight dry metal containers",
            "Handle with dry and clean tools"
        ] 
    },
    39: { 
        level: "MEDIUM RISK", status: "Stable Irritant", isSafe: false, 
        advices: [
            "Avoid inhaling fine metallic dust particles",
            "Low chronic toxicity for general users",
            "Stable solid metal under room conditions",
            "Always handle with protective safety gloves",
            "Wash hands thoroughly after handling metal",
            "Ensure localized exhaust ventilation is active"
        ],
        locations: ["Material Lab", "Alloy Factory", "Testing Facility", "Industrial Shop"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Wash hands thoroughly after handling metal",
            "Ensure localized exhaust ventilation is active",
            "Wear safety glasses for mechanical work",
            "Handle with protective industrial safety gloves",
            "Keep work area clean and organized"
        ] 
    },
    40: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Highly resistant to any chemical corrosion",
            "Non-toxic material in bulk solid form",
            "Biocompatible and safe for medical use",
            "Stable under very high thermal conditions",
            "Handle sharp metal filings with care",
            "Avoid contact with hydrofluoric acid"
        ],
        locations: ["Nuclear Plant", "Industrial Lab", "Aerospace Hangar", "Power Station"],
        precautions: [
            "No special hazard for bulk metal",
            "Handle sharp metal filings with care",
            "Follow standard industrial workshop safety rules",
            "Avoid contact with hydrofluoric acid chemicals",
            "Wear gloves when handling heavy parts",
            "Store in an organized dry place"
        ] 
    },
    41: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Non-reactive metal, safe for handling",
            "Superconductive properties at very low temperatures",
            "Very low toxicity for laboratory users",
            "Highly resistant to most chemical corrosion",
            "Avoid inhaling fine niobium metal dust",
            "Store at standard room temperature conditions"
        ],
        locations: ["High-Tech Lab", "Superconductor Lab", "Particle Accelerator", "Research Hub"],
        precautions: [
            "Follow all standard laboratory safety protocols",
            "Avoid any inhalation of metal dust",
            "Handle only with clean dry tools",
            "Store at standard room temperature conditions",
            "Wear protective gloves for general handling",
            "Keep storage area clean and organized"
        ] 
    },
    42: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Extremely high melting point for industry",
            "Non-toxic solid in its natural form",
            "Essential nutrient in very trace amounts",
            "Stable and non-reactive in air",
            "Avoid inhalation of high-temperature fumes",
            "Wear heat-resistant gloves during processing"
        ],
        locations: ["Steel Mill", "Aerospace Lab", "Laboratory", "Foundry"],
        precautions: [
            "Avoid inhalation of high temperature fumes",
            "Wear heat-resistant gloves during processing work",
            "Follow all standard workshop hygiene rules",
            "Keep work area clean of debris",
            "Wear eye protection during foundry work",
            "Handle heavy parts with proper equipment"
        ] 
    },
    43: { 
        level: "HIGH RISK", status: "Radioactive", isSafe: false, 
        advices: [
            "Synthetic element, emits Beta radiation particles",
            "Strict laboratory controls are legally required",
            "Requires specialized radioactive disposal methods",
            "Lead shielding is mandatory for protection",
            "Use Geiger counters for constant monitoring",
            "Always track radiation badges during work"
        ],
        locations: ["Nuclear Medicine Dept", "Radiation Lab", "Isotope Facility", "Sealed Bunker"],
        precautions: [
            "Lead shielding is strictly required",
            "Use Geiger counters for constant monitoring",
            "Always track radiation badges during work",
            "Limit exposure time to absolute minimum",
            "Follow all nuclear and legal protocols",
            "Wear full protective gear in lab"
        ] 
    },
    44: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: [
            "Highly unreactive and very stable metal",
            "Non-toxic solid in all standard forms",
            "Extremely resistant to any chemical corrosion",
            "Hard and brittle, handle with care",
            "Wear glasses to avoid brittle chips",
            "Store in a secure laboratory area"
        ],
        locations: ["Precious Metal Lab", "Industrial Factory", "Laboratory", "Mining Center"],
        precautions: [
            "No special chemical hazards for users",
            "Wear safety glasses for brittle chips",
            "Follow standard laboratory hygiene rules",
            "Store in a secure locked area",
            "Use proper tools for precious metals",
            "Keep work area clean and organized"
        ] 
    },
    45: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: [
            "Highly stable and non-reactive precious metal",
            "Non-toxic in bulk solid mass form",
            "Rare material with excellent catalytic properties",
            "Handle only with soft safety tools",
            "Avoid using any abrasive cleaning methods",
            "Maintain proper air filtration in labs"
        ],
        locations: ["Automotive Lab", "Jewelry Center", "Clean Lab", "Refining Room"],
        precautions: [
            "Handle only with soft clean tools",
            "Avoid using abrasive metal cleaning methods",
            "Follow all standard laboratory safety rules",
            "Maintain proper air filtration in lab",
            "Store in a safe dry place",
            "Wear gloves for material handling work"
        ] 
    },
    46: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Absorbs large amounts of hydrogen gas",
            "Non-toxic solid precious metal material",
            "Completely non-reactive in normal air",
            "Keep away from all sulfur compounds",
            "Avoid exposing metal to excessive heat",
            "Recycle all metal scrap for value"
        ],
        locations: ["Hydrogen Power Plant", "Electronics Factory", "Jewelry Shop", "Lab"],
        precautions: [
            "Keep away from harmful sulfur compounds",
            "Avoid exposing metal to excessive heat",
            "Follow standard precious metal care rules",
            "Recycle all metal scrap for value",
            "Handle with clean gloves for purity",
            "Store in a dry secure cabinet"
        ] 
    },
    47: { 
        level: "LOW RISK", status: "Safe Precious Metal", isSafe: true, 
        advices: [
            "Natural antibacterial properties on its surface",
            "Non-toxic and safe for skin contact",
            "Highly conductive for electricity and heat",
            "Safe to wear as jewelry daily",
            "Protect from tarnishing in moist air",
            "Avoid contact with strong nitric acid"
        ],
        locations: ["Home", "Jewelry Store", "Medical Clinic", "Electronics Lab"],
        precautions: [
            "Protect from tarnishing in moist air",
            "Follow standard daily hygiene cleaning rules",
            "Avoid any contact with nitric acid",
            "Clean surfaces only with soft cloths",
            "Store in a dry organized place",
            "Use specialized tools for jewelry work"
        ] 
    },
    48: { 
        level: "HIGH RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Highly toxic dust, do not inhale",
            "Significant risk of kidney damage if exposed",
            "Potentially carcinogenic to the human body",
            "Dangerous environmental pollutant, handle carefully",
            "Use P100 respirators for full protection",
            "Wear disposable coveralls during industrial work"
        ],
        locations: ["Battery Recycling", "Toxic Metal Lab", "Waste Treatment", "Controlled Plant"],
        precautions: [
            "Use P100 respirators for full safety",
            "Wear disposable coveralls during industrial work",
            "Mandatory hand washing before leaving area",
            "Follow strict hazardous waste management rules",
            "Monitor area with toxic dust sensors",
            "Work only in certified safety booths"
        ] 
    },
    49: { 
        level: "MEDIUM RISK", status: "Stable Metal", isSafe: false, 
        advices: [
            "Mildly toxic dust if inhaled deeply",
            "Very soft metal, handle with care",
            "Stable in both air and water",
            "Avoid direct skin contact with powder",
            "Always wash hands after handling metal",
            "Use only in controlled laboratory areas"
        ],
        locations: ["Display Tech Lab", "Semiconductor Plant", "Electronics Lab", "Material Test Room"],
        precautions: [
            "Avoid direct skin contact with powder",
            "Do not inhale fine metal dust",
            "Wash hands thoroughly after handling metal",
            "Use in controlled industrial laboratory areas",
            "Wear safety goggles for eye protection",
            "Store in a cool dry place"
        ] 
    },
    50: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and safe for food containers",
            "Highly resistant to most chemical corrosion",
            "Stable and very safe to handle",
            "No specific hazards for general users",
            "Stable solid at standard room temperature",
            "Recycle metal scrap for environmental protection"
        ],
        locations: ["Home", "Canning Factory", "Workshop", "Food Safety Lab"],
        precautions: [
            "No specific hazards for general users",
            "Stable material at room temperature conditions",
            "Follow all standard workshop safety rules",
            "Recycle scrap for environmental safety protection",
            "Store in a dry organized warehouse",
            "Handle heavy coils with proper equipment"
        ] 
    },
    51: { 
        level: "MEDIUM RISK", status: "Toxic Irritant", isSafe: false, 
        advices: [
            "Toxic if swallowed by human users",
            "Dust irritates lungs and respiratory tract",
            "Stable metalloid under normal laboratory conditions",
            "Brittle material, wear eye protection always",
            "Wear a dust mask during processing",
            "Ensure good workspace airflow at all times"
        ],
        locations: ["Metallurgy Workshop", "Flame Retardant Lab", "Industrial Facility", "Testing Bay"],
        precautions: [
            "Wear a protective dust mask always",
            "Wash skin thoroughly with soap",
            "Ensure good industrial airflow in workspace",
            "Avoid creating fine airborne dust particles",
            "Wear safety glasses for mechanical work",
            "Follow all industrial hygiene safety protocols"
        ] 
    },
    52: { 
        level: "MEDIUM RISK", status: "Toxic Metalloid", isSafe: false, 
        advices: [
            "Produces a very distinct garlic-like odor",
            "Mildly toxic if handled without protection",
            "Avoid direct inhalation of metal vapors",
            "Used safely in specialized metal alloys",
            "Protective gloves are required for handling",
            "Wash thoroughly after every work session"
        ],
        locations: ["Refining Plant", "Advanced Material Lab", "Testing Center", "Specialty Lab"],
        precautions: [
            "Monitor area for toxic metal vapors",
            "Avoid direct inhalation of metal fumes",
            "Protective gloves are strictly required now",
            "Wash thoroughly after every work session",
            "Work only in ventilated industrial booths",
            "Store in a cool dry location"
        ] 
    },
    53: { 
        level: "MEDIUM RISK", status: "Reactive Nonmetal", isSafe: false, 
        advices: [
            "Strong skin irritant, avoid direct contact",
            "Toxic in very large ingested amounts",
            "Stains skin and all surfaces purple",
            "Sublimes into vapor at room temperature",
            "Use only in well ventilated areas",
            "Store in very tight sealed containers"
        ],
        locations: ["Biology Lab", "Medical Room", "Chemistry Classroom", "Pharmacy Lab"],
        precautions: [
            "Use only in well ventilated areas",
            "Avoid staining skin with purple colors",
            "Store in very tight sealed containers",
            "Keep away from reactive metal surfaces",
            "Wear gloves and eye protection safely",
            "Avoid inhaling concentrated vapors directly"
        ] 
    },
    54: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-toxic and non-reactive noble gas",
            "Very heavy gas, monitor floor levels",
            "Stable and safe for medical imaging",
            "Ensure oxygen levels in small rooms",
            "Check all high pressure gas tanks",
            "Always secure cylinders in upright position"
        ],
        locations: ["Imaging Center", "Lighting Lab", "Aerospace Hub", "Specialty Lab"],
        precautions: [
            "Ensure oxygen levels are safe indoors",
            "Check all high pressure tanks regularly",
            "Follow all standard gas safety rules",
            "Secure gas cylinders in upright position",
            "Monitor valves for potential gas leaks",
            "Store in cool dry warehouse area"
        ] 
    },
    55: { 
        level: "HIGH RISK", status: "Extremely Reactive", isSafe: false, 
        advices: [
            "Explodes violently upon contact with water",
            "Liquid metal near standard room temperature",
            "Causes immediate and severe skin burns",
            "Store strictly in sealed glass ampoules",
            "Handle only in specialized glove boxes",
            "Remote handling is required for safety"
        ],
        locations: ["Atomic Clock Lab", "Vacuum Sealed Lab", "Physics Institute", "Deep Storage"],
        precautions: [
            "Handle only in specialized glove boxes",
            "Remote handling is strictly required now",
            "Avoid thermal shock to glass containers",
            "Use triple-containment storage for safety",
            "Zero moisture is allowed in workplace",
            "Wear a full face shield always"
        ] 
    },
    56: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Oxidizes very rapidly in moist air",
            "Toxic if dissolved in drinking water",
            "Reacts with water to form hydrogen",
            "Store strictly under protective mineral oil",
            "Wear eye protection during all handling",
            "Handle only with dry metal tools"
        ],
        locations: ["Petroleum Lab", "X-Ray Dept", "Chemical Supply", "Drilling Site"],
        precautions: [
            "Keep away from all water sources",
            "Store strictly under protective mineral oil",
            "Wear eye protection during handling work",
            "Handle only with dry clean tools",
            "Avoid any direct skin contact metal",
            "Follow all standard chemical storage rules"
        ] 
    },
    57: { 
        level: "MEDIUM RISK", status: "Rare Earth", isSafe: false, 
        advices: [
            "Fine metal dust is highly flammable",
            "Strong irritant to skin and eyes",
            "Reactive with water and environmental moisture",
            "Avoid any sparks or heat sources",
            "Wear safety goggles during all work",
            "Store in a very dry place"
        ],
        locations: ["Optics Lab", "Rare Earth Facility", "Glass Workshop", "Research Lab"],
        precautions: [
            "Avoid all dust sparks and heat",
            "Wear safety goggles for work sessions",
            "Wash hands thoroughly after handling metal",
            "Store in a dry cool place",
            "Avoid inhaling fine airborne metal dust",
            "Maintain a clean organized work area"
        ] 
    },
    58: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Pyrophoric dust, ignites in open air",
            "Oxidizes very quickly when exposed air",
            "Low toxicity in bulk solid form",
            "Keep dust away from all air",
            "Avoid moisture during storage and use",
            "Store in a very cool area"
        ],
        locations: ["Catalyst Lab", "Automotive Center", "Safe Testing Field", "Industrial Workshop"],
        precautions: [
            "Keep dust away from open air",
            "Follow standard industrial tool safety rules",
            "Avoid moisture during storage and use",
            "Store in a very cool area",
            "Handle only with dry clean tools",
            "Wear flame-retardant safety gear for work"
        ] 
    },
    59: { 
        level: "MEDIUM RISK", status: "Rare Earth", isSafe: false, 
        advices: [
            "Fine dust is highly flammable material",
            "Very sensitive to open air exposure",
            "Irritant to lungs if dust inhaled",
            "Soft metal, handle with care always",
            "Avoid all sparks and high heat",
            "Keep storage containers tightly closed"
        ],
        locations: ["Magnet Factory", "Metallurgy Lab", "Specialty Glass Lab", "Advanced Material Hub"],
        precautions: [
            "Avoid all sparks and heat sources",
            "Follow all standard laboratory safety rules",
            "Use protective gloves for material handling",
            "Keep storage containers tightly closed now",
            "Wash hands thoroughly after work sessions",
            "Avoid inhaling fine metallic dust particles"
        ] 
    },
    60: { 
        level: "MEDIUM RISK", status: "Stable / Irritant", isSafe: false, 
        advices: [
            "Distinct magnetic properties in solid form",
            "Oxidizes slowly when exposed to air",
            "Avoid inhaling fine metallic dust particles",
            "Stable solid in bulk mass form",
            "Wear safety glasses during mechanical work",
            "Keep away from extreme heat sources"
        ],
        locations: ["Magnet Lab", "Clean Room", "Manufacturing Hub", "Electronics Test Bay"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Wear safety glasses for mechanical work",
            "Wash hands thoroughly after handling magnets",
            "Keep away from extreme heat sources",
            "Follow specialized magnet handling safety protocols",
            "Maintain a clean organized workspace daily"
        ] 
    },
    61: { 
        level: "HIGH RISK", status: "Radioactive", isSafe: false, 
        advices: ["Highly radioactive lanthanide", "Synthetic element, strictly regulated", "Emits beta radiation during decay", "Handle only in specialized facilities"],
        locations: ["Nuclear Research Facility", "Isotope Lab", "Advanced Physics Lab"],
        precautions: ["Use remote handling tools", "Strict radiation monitoring required", "Store in certified lead containers", "Full hazmat protocol mandatory"] 
    },
    62: { 
        level: "MEDIUM RISK", status: "Rare Earth / Flammable", isSafe: false, 
        advices: ["Dust is pyrophoric (ignites spontaneously)", "Oxidizes in moist air", "Used in high-strength magnets", "Irritant to eyes and skin"],
        locations: ["Magnet Factory", "Electronics Lab", "Nuclear Reactor Control"],
        precautions: ["Store under inert gas or mineral oil", "Avoid skin contact with dust", "Keep away from moisture and heat", "Use non-sparking tools"] 
    },
    63: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: ["The most reactive rare earth metal", "Ignites in air at 150°C", "Reacts rapidly with water", "Soft as lead"],
        locations: ["Phosphor Plant", "Optics Lab", "Advanced Electronics"],
        precautions: ["Handle in dry inert atmosphere", "Keep away from all water sources", "Wear full eye protection", "Store in vacuum-sealed containers"] 
    },
    64: { 
        level: "MEDIUM RISK", status: "Magnetic Rare Earth", isSafe: false, 
        advices: ["Ferromagnetic at room temperature", "Slightly toxic if dust inhaled", "Oxidizes slowly in moist air", "Used in MRI contrast agents"],
        locations: ["MRI Center", "Metallurgy Lab", "Cooling Systems Hub"],
        precautions: ["Maintain dry storage conditions", "Avoid fine dust inhalation", "Follow metal handling standards", "Wear gloves during transfer"] 
    },
    65: { 
        level: "MEDIUM RISK", status: "Rare Earth Metal", isSafe: false, 
        advices: ["Used in solid-state devices", "Fairly stable in air in bulk", "Dust can cause respiratory irritation", "Malleable and ductile"],
        locations: ["Electronic Component Factory", "Speaker Manufacturing", "Laser Lab"],
        precautions: ["Wear dust mask when cutting", "Avoid high temperature exposure", "Wash hands after handling", "Store in a cool dry place"] 
    },
    66: { 
        level: "MEDIUM RISK", status: "High Magnetic Force", isSafe: false, 
        advices: ["Extremely powerful magnetic properties", "Oxidizes in air to lose magnetism", "Soft enough to cut with knife", "Used in nuclear control rods"],
        locations: ["Magnetics Lab", "Energy Research Center", "Hard Drive Factory"],
        precautions: ["Store in airtight containers", "Avoid crushing into fine powder", "Use protective eyewear", "Keep away from heat sources"] 
    },
    67: { 
        level: "MEDIUM RISK", status: "Rare Earth / Stable", isSafe: false, 
        advices: ["Highest magnetic moment of elements", "Relatively stable in dry air", "Used in high-power lasers", "Soft and malleable"],
        locations: ["Laser Surgery Center", "Optical Fiber Plant", "Research Lab"],
        precautions: ["Control dust exposure", "Avoid ingestion or inhalation", "Standard lab protective gear", "Keep away from strong acids"] 
    },
    68: { 
        level: "MEDIUM RISK", status: "Rare Earth / Stable", isSafe: false, 
        advices: ["Essential for fiber optic cables", "Stable in air and moisture", "Low acute toxicity in bulk", "Dust is a mild irritant"],
        locations: ["Telecomm Hub", "Glass Blowing Lab", "Laser Lab"],
        precautions: ["Use gloves to prevent skin oil reaction", "Wear safety goggles", "Avoid generating dust", "Store in standard containers"] 
    },
    69: { 
        level: "MEDIUM RISK", status: "Rare Earth / Rare", isSafe: false, 
        advices: ["Extremely rare and expensive", "Lustrous and easy to machine", "Dust is flammable if heated", "Reacts slowly with water"],
        locations: ["Specialty Alloy Lab", "Portable X-Ray Units", "Advanced Physics"],
        precautions: ["Minimize material loss", "Avoid all sparks and flames", "Store away from humidity", "Standard laboratory safety"] 
    },
    70: { 
        level: "MEDIUM RISK", status: "Reactive Rare Earth", isSafe: false, 
        advices: ["Oxidizes rapidly in air", "Must be kept in sealed containers", "Reacts with water to release gas", "Dust is a fire hazard"],
        locations: ["Atomic Clock Lab", "Metallurgy Research", "Electronics Lab"],
        precautions: ["Keep submerged in oil or inert gas", "Avoid contact with water", "Use respiratory protection for dust", "Keep in cool storage"] 
    },
    71: { 
        level: "LOW RISK", status: "Stable Heavy Metal", isSafe: true, 
        advices: ["Highest density of lanthanides", "Hardest rare earth metal", "Relatively stable in dry air", "Non-toxic in metallic form"],
        locations: ["Petroleum Refinery", "Advanced Catalyst Lab", "Research Facility"],
        precautions: ["Standard lab safety rules", "Avoid acidic environments", "Wash hands after work", "Keep workspace organized"] 
    },
    72: { 
        level: "MEDIUM RISK", status: "Transition Metal", isSafe: false, 
        advices: ["Powder is highly flammable", "Resistant to corrosion in bulk", "Used in nuclear reactor rods", "High melting point"],
        locations: ["Nuclear Engineering", "Aerospace Plant", "Semiconductor Lab"],
        precautions: ["Keep powder away from sparks", "Handle bulk metal safely", "Use ventilation for machining", "Wear heat-resistant gloves"] 
    },
    73: { 
        level: "LOW RISK", status: "Refractory Metal", isSafe: true, 
        advices: ["Highly biocompatible metal", "Completely immune to body fluids", "High melting point metal", "Used in surgical implants"],
        locations: ["Medical Device Plant", "Capacitor Factory", "Chemical Lab"],
        precautions: ["Avoid inhaling grinding dust", "Standard protective gear", "Clean surfaces regularly", "No special storage required"] 
    },
    74: { 
        level: "LOW RISK", status: "Heavy Metal", isSafe: true, 
        advices: ["Highest melting point of metals", "Extremely dense and heavy", "Stable and non-reactive", "Low toxicity profile"],
        locations: ["Tool Manufacturing", "Aerospace Hub", "Lighting Lab"],
        precautions: ["Handle heavy weights carefully", "Use eye protection during cutting", "Avoid dust accumulation", "Standard hygiene"] 
    },
    75: { 
        level: "LOW RISK", status: "Rare Transition Metal", isSafe: true, 
        advices: ["Third highest melting point", "Highly resistant to corrosion", "Used in superalloys", "Non-toxic in bulk"],
        locations: ["Jet Engine Factory", "Catalyst Research", "Electronics Lab"],
        precautions: ["Standard lab protocols", "Avoid strong oxidizers", "Handle with clean gloves", "General dust control"] 
    },
    76: { 
        level: "HIGH RISK", status: "Toxic Oxide Former", isSafe: false, 
        advices: ["Densely packed metal", "Forms highly toxic osmium tetroxide", "Oxide causes lung/eye damage", "Extremely hard and brittle"],
        locations: ["Alloy Research", "Chemical Synthesis", "Specialty Tooling"],
        precautions: ["Work in high-flow fume hood", "Avoid heating in open air", "Tight seal on all containers", "Immediate medical eye wash ready"] 
    },
    77: { 
        level: "LOW RISK", status: "Corrosion Resistant", isSafe: true, 
        advices: ["Most corrosion-resistant metal", "Extremely stable and noble", "Brittle and hard to machine", "Used in spark plugs"],
        locations: ["High-End Lab Gear", "Automotive Research", "Jewelry Shop"],
        precautions: ["Wear eye protection when cutting", "Standard laboratory safety", "Avoid contact with aqua regia", "Handle with care"] 
    },
    78: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: ["Highly unreactive metal", "Used as a catalyst", "Biocompatible in bulk", "Lustrous and heavy"],
        locations: ["Catalytic Converter Plant", "Jewelry Lab", "Cancer Research"],
        precautions: ["Standard safety equipment", "Minimize material waste", "Keep away from strong alkalis", "Wash hands after contact"] 
    },
    79: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: ["Chemically inactive / Safe", "High electrical conductivity", "Very soft and malleable", "Valuable industrial asset"],
        locations: ["Electronics Bay", "Jewelry Workshop", "Medical Lab"],
        precautions: ["Standard lab protocols", "Maintain high security", "Avoid aqua regia contact", "General hygiene"] 
    },
    80: { 
        level: "HIGH RISK", status: "Toxic Liquid Metal", isSafe: false, 
        advices: ["Liquid at room temperature", "Vapors are highly neurotoxic", "Cumulative poison in humans", "Emits odorless toxic gas"],
        locations: ["Instrument Lab", "Old Medical Storage", "Industrial Plants"],
        precautions: ["Mandatory fume hood use", "Mercury spill kit available", "Strict respiratory protection", "Zero skin contact allowed"] 
    },
    81: { 
        level: "HIGH RISK", status: "Highly Toxic Metal", isSafe: false, 
        advices: ["Extremely poisonous if touched", "Readily absorbed through skin", "Odorless and tasteless compounds", "Soft metal, oxidizes fast"],
        locations: ["Glass Factory", "Electronics Lab", "Chemical Research"],
        precautions: ["Double gloving required", "Strict ventilation control", "Biohazard disposal for waste", "Frequent medical monitoring"] 
    },
    82: { 
        level: "MEDIUM RISK", status: "Toxic Heavy Metal", isSafe: false, 
        advices: ["Soft, dense, and malleable", "Potent neurotoxin if ingested", "Cumulative health hazard", "Effective radiation shield"],
        locations: ["Battery Plant", "Ammunition Lab", "Radiation Wing"],
        precautions: ["Wash hands thoroughly", "No eating/drinking near metal", "Avoid creating lead dust", "Use HEPA vacuum for cleanup"] 
    },
    83: { 
        level: "LOW RISK", status: "Stable Heavy Metal", isSafe: true, 
        advices: ["Safest of the heavy metals", "Expansion upon freezing", "Very low toxicity profile", "Used in pharmaceuticals"],
        locations: ["Pharma Lab", "Soldering Station", "Foundry"],
        precautions: ["Standard lab safety", "Avoid long-term inhalation", "Wash hands after work", "Keep in dry area"] 
    },
    84: { 
        level: "HIGH RISK", status: "Radioactive Poison", isSafe: false, 
        advices: ["Extremely high radioactivity", "Significant heat producer", "Lethal in minute quantities", "Rare and highly unstable"],
        locations: ["Nuclear Physics Lab", "Space Power Research", "Restricted Zone"],
        precautions: ["Full remote manipulation", "Radiation-proof suits", "Continuous air monitoring", "Authorized access only"] 
    },
    85: { 
        level: "HIGH RISK", status: "Radioactive Halogen", isSafe: false, 
        advices: ["Highly unstable isotope", "Short-lived and radioactive", "Alpha particle emitter", "Toxic chemical behavior"],
        locations: ["Radiotherapy Research", "Nuclear Medicine Lab"],
        precautions: ["Maximum shielding required", "Strict time/distance limits", "Hazmat containment", "Certified radioactive waste bins"] 
    },
    86: { 
        level: "HIGH RISK", status: "Radioactive Gas", isSafe: false, 
        advices: ["Odorless radioactive gas", "Heavier than air, settles low", "Major cause of lung cancer", "Naturally occurring hazard"],
        locations: ["Basements", "Geology Lab", "Mining Sites"],
        precautions: ["Continuous air ventilation", "Radon detectors required", "Sealing of floor cracks", "Respirators for workers"] 
    },
    87: { 
        level: "HIGH RISK", status: "Highly Radioactive", isSafe: false, 
        advices: ["Most unstable natural element", "Reacts violently with water", "Extreme radiation hazard", "Short half-life metal"],
        locations: ["Nuclear Research Facility", "Advanced Isotope Lab"],
        precautions: ["Robotic handling only", "Total lead shielding", "Evacuation protocols ready", "Strict dose tracking"] 
    },
    88: { 
        level: "HIGH RISK", status: "Radioactive Metal", isSafe: false, 
        advices: ["Luminous and highly radioactive", "Targets bones if ingested", "Decays into radon gas", "Historically dangerous"],
        locations: ["Legacy Lab Sites", "Radiology Research", "Specialty Physics"],
        precautions: ["Strict containment", "No direct exposure", "Radon monitoring mandatory", "Lead-lined storage"] 
    },
    89: { 
        level: "HIGH RISK", status: "Radioactive Actinide", isSafe: false, 
        advices: ["Glows in the dark (blue)", "Strong alpha radiation", "Chemically highly reactive", "Potent biological hazard"],
        locations: ["Neutron Source Lab", "Nuclear Medicine", "Space Tech"],
        precautions: ["Full PPE with respirators", "Lead shielding required", "Decontamination protocols", "Authorized staff only"] 
    },
    90: { 
        level: "HIGH RISK", status: "Radioactive Fuel", isSafe: false, 
        advices: ["Naturally radioactive metal", "Potential nuclear fuel", "Emits alpha particles", "Heavy and chemically reactive"],
        locations: ["Nuclear Power Research", "High-End Metallurgy", "Geology Lab"],
        precautions: ["Dust inhalation prevention", "Radiation shielding used", "Monitor exposure levels", "Inventory tracking mandatory"] 
    },
    91: { 
        level: "HIGH RISK", status: "Radioactive Actinide", isSafe: false, 
        advices: [
            "Protactinium - Highly radioactive and toxic",
            "Dense metallic element that emits alpha particles",
            "Naturally occurring but extremely rare",
            "Significant radiological hazard if inhaled",
            "Can be absorbed through skin in compound forms",
            "Oxidizes slowly when exposed to open air"
        ],
        locations: ["Nuclear Research Lab", "Geology Specialty Lab", "Atomic Energy Hub", "Isotope Production Wing"],
        precautions: [
            "Use specialized glove boxes for all handling",
            "Strict radiation monitoring of the workspace",
            "Avoid any dust inhalation or direct contact",
            "Specialized radioactive waste protocols",
            "Regular medical checkups for laboratory staff",
            "Wear lead-lined aprons and double gloves"
        ] 
    },
    92: { 
        level: "HIGH RISK", status: "Fissile Nuclear Fuel", isSafe: false, 
        advices: [
            "Uranium - Primary fuel for nuclear power",
            "Chemically toxic heavy metal to kidneys",
            "Pyrophoric when finely divided, ignites easily",
            "Long-term radiological risk during storage",
            "Extremely heavy and difficult to transport",
            "Subject to strict international laws"
        ],
        locations: ["Nuclear Power Plant", "Enrichment Facility", "Military Research Base", "Nuclear Fuel Fabrication Plant"],
        precautions: [
            "Strict regulatory and inventory control",
            "Heavy metal toxicity safety protocols",
            "Automatic fire-suppression systems in areas",
            "Store in reinforced lead-lined containers",
            "Continuous dosimeter tracking for workers",
            "Use high-efficiency HEPA air filtration"
        ] 
    },
    93: { 
        level: "HIGH RISK", status: "Transuranic Metal", isSafe: false, 
        advices: [
            "Neptunium - First synthetic transuranium element",
            "Highly radioactive and dangerous metallic solid",
            "Common byproduct found in nuclear reactor fuel",
            "Potent alpha emitter with high toxicity",
            "Known to accumulate in human bones",
            "Displays a silvery-white luster in pure form"
        ],
        locations: ["National Laboratories", "Nuclear Physics Hub", "Radiochemistry Research Unit", "Waste Reprocessing Plant"],
        precautions: [
            "Remote robotic handling is strictly mandatory",
            "Constant air filtration and monitoring",
            "Full hazmat suits with oxygen supply",
            "Restricted access zones with interlocks",
            "Decontamination showers after every shift",
            "Strict milligram-level accountancy"
        ] 
    },
    94: { 
        level: "HIGH RISK", status: "Fissile Actinide", isSafe: false, 
        advices: [
            "Plutonium - Hazardous radioactive weapon metal",
            "Core material for modern nuclear weapons",
            "High risk of criticality if mishandled",
            "Extreme toxicity if inhaled in micro-quantities",
            "Remains dangerously radioactive for millennia",
            "Generates heat naturally due to alpha decay"
        ],
        locations: ["Nuclear Weapons Facility", "Space Power Research Lab", "Deep Geological Storage", "Radioisotope Power Plant"],
        precautions: [
            "Strict criticality safety mass limits",
            "Advanced multi-layer lead/concrete shielding",
            "Regular bioassay monitoring for exposure",
            "High-security armed containment zones",
            "Emergency evacuation drills performed monthly",
            "Use of dry inert gas for all handling"
        ] 
    },
    95: { 
        level: "HIGH RISK", status: "Radioactive Gamma Emitter", isSafe: false, 
        advices: [
            "Americium - Common radioactive source element",
            "Strong emitter of alpha and gamma radiation",
            "Long half-life creates persistent hazards",
            "Lustrous silvery metal that reacts with air",
            "Can cause severe internal tissue damage",
            "Vital for industrial non-destructive testing"
        ],
        locations: ["Industrial Safety Lab", "Neutron Source Research Center", "Electronics Testing Bay", "Smoke Detector Factory"],
        precautions: [
            "Heavy lead shielding required for storage",
            "Zero direct physical contact allowed",
            "Regular leak testing of all sealed sources",
            "Certified radioactive waste disposal only",
            "Strict daily inventory logs and tracking",
            "Visible radiation warning signs at entries"
        ] 
    },
    96: { 
        level: "HIGH RISK", status: "Radioactive Heat Source", isSafe: false, 
        advices: [
            "Curium - Strongly radioactive synthetic metal",
            "Generates significant thermal energy",
            "Used in radioisotope generators (RTGs)",
            "Aggressive alpha emitter targeting bone marrow",
            "Fluoresces with a faint yellow-white glow",
            "Highly reactive chemically with non-metals"
        ],
        locations: ["Advanced Space Research Lab", "Nuclear Chemistry Wing", "Deep Sea Power Station", "Space Exploration Power Hub"],
        precautions: [
            "Active cooling systems for storage units",
            "Full containment in negative-pressure boxes",
            "Remote manipulation tools for all tasks",
            "Personal dose sensors worn at all times",
            "Highest level biohazard isolation",
            "Thick lead-glass shielding for viewing"
        ] 
    },
    97: { 
        level: "HIGH RISK", status: "Synthetic Radioactive Metal", isSafe: false, 
        advices: [
            "Berkelium - Highly radioactive lab-made metal",
            "Produced in high-flux nuclear reactors",
            "Dual emitter of beta and alpha particles",
            "Soft metal with a silvery-white luster",
            "Chemically mimics the behavior of terbium",
            "Used as a target for creating heavier atoms"
        ],
        locations: ["Particle Accelerator Lab", "High Flux Isotope Reactor", "Target Fabrication Facility", "Heavy Element Discovery Lab"],
        precautions: [
            "Strict isotope inventory and control",
            "Total containment in negative pressure labs",
            "Advanced PPE including respirator systems",
            "Specialized neutron and alpha shielding",
            "Frequent surface contamination wipes",
            "Automated emergency radiation alarms"
        ] 
    },
    98: { 
        level: "HIGH RISK", status: "Potent Neutron Source", isSafe: false, 
        advices: [
            "Californium - Extremely strong neutron emitter",
            "Used in gold mining and oil exploration",
            "Very high radiological risk from neutrons",
            "One of the most valuable materials on earth",
            "Can spontaneously initiate nuclear fission",
            "Decays into curium isotopes over time"
        ],
        locations: ["Petroleum Exploration Site", "Medical Neutron Therapy Center", "National Security Laboratory", "Isotope Production Center"],
        precautions: [
            "Heavy shielding (Concrete, Paraffin, Water)",
            "Specific neutron-sensitive monitoring",
            "Automated remote handling systems",
            "Strict exclusion zones during operation",
            "Boron-loaded shielding for neutron capture",
            "Real-time digital dose rate tracking"
        ] 
    },
    99: { 
        level: "HIGH RISK", status: "Intense Radiation Metal", isSafe: false, 
        advices: [
            "Einsteinium - Highly radioactive synthetic metal",
            "Surrounded by an intense radiation field",
            "Soft metal that glows in the dark visibly",
            "Primarily used for fundamental research",
            "Visible light is emitted due to radioactivity",
            "Rapid decay makes study very difficult"
        ],
        locations: ["Heavy Ion Research Lab", "Nuclear Science Center", "Advanced Physics Research Wing", "Radioisotope Research Unit"],
        precautions: [
            "Micro-scale handling to limit exposure",
            "Intense multi-layer shielding (Lead/Concrete)",
            "Rapid execution of all protocols",
            "Certified hazmat team presence",
            "Daily radiation sweep of the facility",
            "High-efficiency air filtration used"
        ] 
    },
    100: { 
        level: "HIGH RISK", status: "Unstable Synthetic Metal", isSafe: false, 
        advices: [
            "Fermium - Last element from neutron bombardment",
            "Extremely radioactive and unstable metal",
            "Only trace amounts exist in the world",
            "No known commercial or industrial use",
            "Significant risk of spontaneous fission",
            "Decays into lighter isotopes quickly"
        ],
        locations: ["Specialized Nuclear Facility", "Research Accelerator Center", "Heavy Element Target Lab", "Nuclear Chemistry Hub"],
        precautions: [
            "Maximum containment (Biosafety Level 4)",
            "Strict radiological logs and entry control",
            "Expert-only access with high clearance",
            "Automated continuous monitoring systems",
            "Robotic arm systems for transfers",
            "Total atmospheric isolation protocols"
        ] 
    },
    101: { 
        level: "HIGH RISK", status: "Short-lived Radioactive", isSafe: false, 
        advices: ["Mendelevium - Synthetic unstable element", "Created by bombarding einsteinium", "Strong alpha decay hazard to researchers", "Only microscopic quantities exist", "Named after the periodic table creator", "Complex chemical oxidation states"],
        locations: ["Cyclotron Research Lab", "Heavy Ion Research Center", "Nuclear Physics Academy", "Particle Accelerator Facility"],
        precautions: ["Total radiation isolation protocols", "Shielded target holders used", "Remote electronic detection only", "Hazmat Level 4 protective suits", "Strict access control for personnel", "Continuous dosimeter monitoring"] 
    },
    102: { 
        level: "HIGH RISK", status: "Radioactive Metal Isotope", isSafe: false, 
        advices: ["Nobelium - Synthetic radioactive heavy metal", "Decays within minutes or seconds", "High energy alpha particle emission", "Requires particle accelerators to produce", "Extremely toxic with no biological role", "Chemistry similar to alkaline earth metals"],
        locations: ["Nuclear Physics Lab", "Isotope Separator Wing", "Research Accelerator Center", "Heavy Ion Facility"],
        precautions: ["Advanced particle containment systems", "Vacuum chamber operation mandatory", "Real-time radiation flux sensors", "Remote manipulation for all handling", "Thick lead-glass observation windows", "Decontamination after beam sessions"] 
    },
    103: { 
        level: "HIGH RISK", status: "Unstable Actinide Metal", isSafe: false, 
        advices: ["Lawrencium - Final actinide series element", "Highly radioactive with short life span", "Behavioral chemistry similar to lutetium", "Produced in atom-at-a-time quantities", "Intense radiological decay field", "Used to test relativistic atom effects"],
        locations: ["Heavy Ion Research Facility", "Nuclear Chemistry Lab", "Particle Accelerator Hub", "National Laboratory Complex"],
        precautions: ["Full radiation safety gear and respirators", "Robotic assembly for target areas", "Continuous air sampling for alpha", "Strict decontamination protocols", "Authorized senior scientists only", "Lead-lined storage for isotopes"] 
    },
    104: { 
        level: "HIGH RISK", status: "Transactinide Heavy Metal", isSafe: false, 
        advices: ["Rutherfordium - First superheavy element", "Extremely unstable with very short life", "Emits high energy radiation during decay", "Synthesized via fusion of ion beams", "Chemically behaves like group 4 hafnium", "Exists only in high-energy physics labs"],
        locations: ["Particle Accelerator Center", "Heavy Ion Research Hub", "Nuclear Chemistry Center", "Theoretical Physics Lab"],
        precautions: ["Automated detector systems for safety", "Remote electronic surveillance 24/7", "Shielded target chambers for ions", "Short-exposure protocols for staff", "Advanced vacuum containment systems", "Emergency beam-stop safety protocols"] 
    },
    105: { 
        level: "HIGH RISK", status: "Superheavy Radioactive", isSafe: false, 
        advices: ["Dubnium - Highly unstable synthetic metal", "Decays primarily via spontaneous fission", "Intense alpha radiation hazard to tissue", "Individual atoms exist for only hours", "Highly radioactive waste hazard", "Chemically aligns with tantalum metal"],
        locations: ["Nuclear Research Center", "Accelerator Facility", "Heavy Element Lab", "Isotope Production Center"],
        precautions: ["Thick lead shielding for containment", "Remote robotic target handling", "Nuclear waste management protocols", "Constant area radiation monitoring", "Expert-level supervision mandatory", "Use of negative pressure boxes"] 
    },
    106: { 
        level: "HIGH RISK", status: "Unstable Transition Metal", isSafe: false, 
        advices: ["Seaborgium - Superheavy radioactive metal", "Decays fast via alpha particle emission", "Half-life measured in seconds", "Extreme danger in any detectable amount", "Chemical properties align with tungsten", "Synthesized using ion fusion tech"],
        locations: ["Advanced Physics Lab", "Heavy Ion Center", "Nuclear Science Wing", "Linear Collider Facility"],
        precautions: ["Digital radiation sensors required", "Dedicated lead-lined security workspace", "Robotic arm manipulation for all", "Strict time-limit protocols for staff", "Automatic alarm systems for leaks", "Biohazard-grade air filtration"] 
    },
    107: { 
        level: "HIGH RISK", status: "Synthetic Heavy Metal", isSafe: false, 
        advices: ["Bohrium - Short-lived synthetic metal", "Major radiological hazard during decay", "Produced by cold fusion of nuclei", "Highly unstable atomic structure", "Chemically behaves similar to rhenium", "Identifiable only by decay signals"],
        locations: ["Nuclear Lab", "Isotope Research Center", "Particle Accelerator Center", "Heavy Ion Facility"],
        precautions: ["Thick lead-reinforced walls used", "Remote detector monitoring 24/7", "Zero physical contact with targets", "Strict electronic access and logs", "Full radiation suits for maintenance", "Real-time dose-rate calculations"] 
    },
    108: { 
        level: "HIGH RISK", status: "Volatile Radioactive Metal", isSafe: false, 
        advices: ["Hassium - Transactinide superheavy metal", "Forms highly volatile radioactive oxides", "Extreme inhalation hazard if oxidized", "Concentrated radioactivity in tiny samples", "Decays in seconds into lighter atoms", "Chemically mimics osmium metal"],
        locations: ["Heavy Ion Research Facility", "Chemical Physics Lab", "Nuclear Accelerator Hub", "Radiochemistry Discovery Wing"],
        precautions: ["Remote handling is absolutely mandatory", "Fume hoods with nuclear filters", "Closed-loop vacuum systems used", "Continuous atmospheric monitoring", "Radiological hazmat team on site", "Strict containment for oxide vapors"] 
    },
    109: { 
        level: "HIGH RISK", status: "Superheavy Synthetic", isSafe: false, 
        advices: ["Meitnerium - Rare synthetic heavy metal", "No stable isotopes ever discovered", "Intense radioactive decay chain", "Created by bombarding bismuth targets", "One of the heaviest transition metals", "Studied for relativistic electron effects"],
        locations: ["Accelerator Research Lab", "Heavy Ion Research Center", "Nuclear Science Hub", "Theoretical Physics Wing"],
        precautions: ["Strict isolation and multi-layer shielding", "Lead and concrete reinforced bunkers", "Electronic remote sensing equipment", "Limited and logged personnel access", "International nuclear safety standards", "Personal dose tracking for all staff"] 
    },
    110: { 
        level: "HIGH RISK", status: "Highly Unstable Metal", isSafe: false, 
        advices: ["Darmstadtium - Synthetic superheavy metal", "Extremely unstable and radioactive", "Emits high-energy alpha radiation", "Decays in milliseconds into isotopes", "Fusing nickel and lead ions to produce", "Subject to relativistic atomic effects"],
        locations: ["Nuclear Physics Hub", "GSI Research Center", "Particle Accelerator Wing", "Isotope Analysis Lab"],
        precautions: ["Advanced multi-layer radiation shielding", "Automated sample handling and analysis", "Sealed experiment chambers in vacuum", "High-speed detector arrays used", "Restricted nuclear zone clearance", "Bioassay tests for research personnel"] 
    },
    111: { 
        level: "HIGH RISK", status: "Radioactive Transition Metal", isSafe: false, 
        advices: ["Roentgenium - Unstable synthetic metal", "Extreme radiological danger to staff", "Short-lived alpha particle hazard", "Created through high-energy ion fusion", "Chemically similar to gold but reactive", "Exists only as atoms in accelerators"],
        locations: ["Heavy Ion Facility", "Accelerator Research Lab", "Nuclear Science Hub", "Advanced Physics Wing"],
        precautions: ["Strict ALARA radiation safety protocols", "Remote electronic control of tests", "Lead-shielded bunkers for operators", "Continuous personal dose monitoring", "Emergency automated beam shutdown", "Hazmat decontamination on standby"] 
    },
    112: { 
        level: "HIGH RISK", status: "Volatile Superheavy Metal", isSafe: false, 
        advices: ["Copernicium - Unstable volatile metal", "Behaves like a noble liquid or gas", "Intense radioactive decay hazard", "Synthesized using zinc ion fusion", "Relativistic effects alter chemistry", "Heaviest element in group 12"],
        locations: ["Nuclear Lab", "Heavy Ion Facility", "Accelerator Wing", "Physics Research Hub"],
        precautions: ["Total isolation in specialized chambers", "Gas-phase handling protocols mandatory", "Heavy alpha particle shielding", "Remote robotic systems for all", "Strict medical monitoring for staff", "Air-tight experiment containment"] 
    },
    113: { 
        level: "HIGH RISK", status: "Post-Transition Metal", isSafe: false, 
        advices: ["Nihonium - Synthetic element from Japan", "Extremely short half-life (milliseconds)", "Intense radiation emission during decay", "Only few atoms have ever been made", "Part of p-block superheavy metals", "Requires massive power for synthesis"],
        locations: ["Physics Research Center", "RIKEN Accelerator Lab", "Nuclear Lab", "Heavy Ion Hub"],
        precautions: ["Radiological control zone mandatory", "Automated detection and analysis", "Vacuum-sealed targets during beam", "Shielded concrete and lead walls", "Authorized PhD level access only", "Remote electronic data logging"] 
    },
    114: { 
        level: "HIGH RISK", status: "Unstable Synthetic", isSafe: false, 
        advices: ["Flerovium - Short-lived superheavy element", "High energy alpha decay radiation", "Potential noble-gas-like behavior", "Extremely unstable nucleus structure", "Located near 'Island of Stability'", "Requires calcium-48 ion bombardment"],
        locations: ["Nuclear Hub", "Accelerator Facility", "Heavy Ion Research", "Physics Lab"],
        precautions: ["Shielding protocols (Lead/Water)", "Remote sensor arrays for data", "Restricted beam-line access zones", "Constant radiation logging for safety", "Vacuum containment only for samples", "Strict dosimetry for all staff"] 
    },
    115: { 
        level: "HIGH RISK", status: "Superheavy Metal", isSafe: false, 
        advices: ["Moscovium - Highly unstable synthetic metal", "Extreme radioactivity hazard to personnel", "Decays through a long alpha chain", "Produced in cyclotron labs via fusion", "No known practical or commercial uses", "Part of group 15 elements"],
        locations: ["Accelerator Lab", "Nuclear Research Center", "Heavy Ion Hub", "Advanced Physics Wing"],
        precautions: ["Remote manipulation of all targets", "Lead-lined experiment bunkers", "Alpha-safe negative pressure boxes", "Continuous automated monitoring", "Nuclear safety specialized training", "Daily radiation sweeps of lab"] 
    },
    116: { 
        level: "HIGH RISK", status: "Unstable Chalcogen", isSafe: false, 
        advices: ["Livermorium - Superheavy radioactive metal", "Extremely short survival time", "Intense radiological field in production", "Produced by calcium-48 ion bombardment", "Highly unstable isotopes decay fast", "Heaviest element in oxygen group"],
        locations: ["Heavy Ion Center", "Nuclear Research Lab", "Accelerator Wing", "National Science Lab"],
        precautions: ["Full radioactive containment protocols", "Lead and water shielding mandatory", "Remote electronic operation of beam", "Nuclear emergency response plan", "Active dose tracking devices worn", "Sealed radioactive waste handling"] 
    },
    117: { 
        level: "HIGH RISK", status: "Superheavy Halogen", isSafe: false, 
        advices: ["Tennessine - Synthetic superheavy halogen", "Extreme radioactivity danger upon creation", "Very short half-life and unstable", "Produced by berkelium bombardment", "Chemically belongs to fluorine group", "Visible only through detector signals"],
        locations: ["Nuclear Research Facility", "Heavy Ion Lab", "Accelerator Hub", "Physics Center"],
        precautions: ["Maximum nuclear safety protocols", "Remote target recovery systems", "Radiation-proof underground bunkers", "Automated high-speed data collection", "Restricted radioactive isotope zone", "Emergency evacuation interlocks"] 
    },
    118: { 
        level: "HIGH RISK", status: "Noble Gas / Unstable", isSafe: false, 
        advices: ["Oganesson - Heaviest known element", "Extremely unstable radioactive gas", "Highest atomic number in science (118)", "Decays in fractions of a second", "Named after Yuri Oganessian", "Predicted high chemical reactivity"],
        locations: ["Joint Institute for Nuclear Research", "Particle Physics Lab", "Superheavy Element Factory", "Advanced Radiation Center"],
        precautions: ["Full radiological isolation systems", "High-speed automated detection arrays", "Redundant shielding for ion beams", "Emergency shutdown systems for facility", "International safety compliance audits", "Closed-loop gas recovery systems"] 
    }
}