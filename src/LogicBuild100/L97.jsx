import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  ArrowRightLeft, 
  RotateCcw, 
  Footprints, 
  Bike, 
  Car, 
  Plane, 
  Calculator, 
  Check, 
  Info, 
  Globe, 
  Sparkles,
  Search
} from 'lucide-react';

// Popular cities with coordinates
const CITY_PRESETS = [
  { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125 },
  { name: 'Chittagong', country: 'Bangladesh', lat: 22.3569, lng: 91.7832 },
  { name: 'Sylhet', country: 'Bangladesh', lat: 24.8949, lng: 91.8687 },
  { name: 'Cox\'s Bazar', country: 'Bangladesh', lat: 21.4272, lng: 92.0058 },
  { name: 'Rajshahi', country: 'Bangladesh', lat: 24.3636, lng: 88.6241 },
  { name: 'Khulna', country: 'Bangladesh', lat: 22.8456, lng: 89.5403 },
  { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278 },
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
  { name: 'Mecca', country: 'Saudi Arabia', lat: 21.3891, lng: 39.8579 },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 }
];

export default function App() {
  // Location A & B States
  const [locA, setLocA] = useState({ name: 'Dhaka', lat: '23.8103', lng: '90.4125' });
  const [locB, setLocB] = useState({ name: 'Chittagong', lat: '22.3569', lng: '91.7832' });

  // Calculation Results State
  const [distanceKm, setDistanceKm] = useState(null);
  const [distanceMiles, setDistanceMiles] = useState(null);
  const [bearing, setBearing] = useState(null);
  const [mathSteps, setMathSteps] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loadingGeo, setLoadingGeo] = useState(null); // 'A' or 'B'

  // Preferences
  const [unit, setUnit] = useState('km'); // 'km' or 'mi'
  const [activeTab, setActiveTab] = useState('calculator'); // 'calculator', 'breakdown', 'presets'

  // Haversine Calculation Algorithm
  const calculateDistance = () => {
    setErrorMsg('');
    const lat1 = parseFloat(locA.lat);
    const lon1 = parseFloat(locA.lng);
    const lat2 = parseFloat(locB.lat);
    const lon2 = parseFloat(locB.lng);

    // Validation
    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
      setErrorMsg('Please enter valid numerical latitude and longitude coordinates.');
      setDistanceKm(null);
      setDistanceMiles(null);
      return;
    }

    if (lat1 < -90 || lat1 > 90 || lat2 < -90 || lat2 > 90) {
      setErrorMsg('Latitude must be between -90 and 90 degrees.');
      return;
    }

    if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
      setErrorMsg('Longitude must be between -180 and 180 degrees.');
      return;
    }

    // Convert degrees to radians
    const toRad = (angle) => (angle * Math.PI) / 180;
    
    const phi1 = toRad(lat1);
    const phi2 = toRad(lat2);
    const deltaPhi = toRad(lat2 - lat1);
    const deltaLambda = toRad(lon2 - lon1);

    // Haversine Formula
    const a = 
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) *
      Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const EARTH_RADIUS_KM = 6371;
    const EARTH_RADIUS_MILES = 3958.8;

    const dKm = EARTH_RADIUS_KM * c;
    const dMiles = EARTH_RADIUS_MILES * c;

    // Calculate Bearing / Direction Angle
    const y = Math.sin(deltaLambda) * Math.cos(phi2);
    const x = Math.cos(phi1) * Math.sin(phi2) -
              Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
    let initialBearing = (Math.atan2(y, x) * 180) / Math.PI;
    initialBearing = (initialBearing + 360) % 360; // Normalize to 0-360°

    setDistanceKm(dKm);
    setDistanceMiles(dMiles);
    setBearing(initialBearing);

    // Step-by-Step Breakdown Data for Math View
    setMathSteps({
      lat1, lon1, lat2, lon2,
      phi1: phi1.toFixed(4),
      phi2: phi2.toFixed(4),
      deltaPhi: deltaPhi.toFixed(4),
      deltaLambda: deltaLambda.toFixed(4),
      aVal: a.toFixed(6),
      cVal: c.toFixed(6),
      km: dKm.toFixed(2),
      miles: dMiles.toFixed(2)
    });
  };

  // Auto calculate on load or value change
  useEffect(() => {
    calculateDistance();
  }, [locA.lat, locA.lng, locB.lat, locB.lng]);

  // Geolocation Handler
  const getCurrentLocation = (target) => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      return;
    }

    setLoadingGeo(target);
    setErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const updated = {
          name: 'My Location',
          lat: latitude.toFixed(4),
          lng: longitude.toFixed(4)
        };

        if (target === 'A') setLocA(updated);
        else setLocB(updated);

        setLoadingGeo(null);
      },
      (err) => {
        setLoadingGeo(null);
        setErrorMsg(`Geolocation error: ${err.message || 'Permission denied or location unavailable.'}`);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Swap Locations
  const handleSwap = () => {
    const temp = { ...locA };
    setLocA(locB);
    setLocB(temp);
  };

  // Formatting travel times
  const formatTravelTime = (speedKmH) => {
    if (!distanceKm) return '--';
    const totalHours = distanceKm / speedKmH;
    
    if (totalHours < 1) {
      const mins = Math.round(totalHours * 60);
      return `${mins} min${mins !== 1 ? 's' : ''}`;
    }
    
    const hours = Math.floor(totalHours);
    const mins = Math.round((totalHours - hours) * 60);
    if (hours > 72) {
      const days = (totalHours / 24).toFixed(1);
      return `${days} days`;
    }
    return `${hours}h ${mins}m`;
  };

  // Compass cardinal direction
  const getCompassDirection = (deg) => {
    if (deg === null) return '';
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-3 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <header className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Location Distance Calculator
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Precision Haversine Great-Circle Distance Engine
              </p>
            </div>
          </div>

          {/* Unit Toggle & View Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <div className="bg-slate-900/80 p-1 rounded-xl border border-slate-700/50 flex text-xs font-medium">
              <button
                onClick={() => setUnit('km')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  unit === 'km' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                KM
              </button>
              <button
                onClick={() => setUnit('mi')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  unit === 'mi' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Miles
              </button>
            </div>

            <div className="bg-slate-900/80 p-1 rounded-xl border border-slate-700/50 flex text-xs font-medium">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'calculator' ? 'bg-slate-700 text-indigo-300 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Calculator
              </button>
              <button
                onClick={() => setActiveTab('breakdown')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'breakdown' ? 'bg-slate-700 text-indigo-300 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Math Formula
              </button>
            </div>
          </div>
        </header>

        {/* Global Error Banner */}
        {errorMsg && (
          <div className="bg-rose-900/40 border border-rose-500/50 text-rose-200 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-fadeIn">
            <span>{errorMsg}</span>
            <button onClick={() => setErrorMsg('')} className="text-rose-400 hover:text-white font-bold ml-4">✕</button>
          </div>
        )}

        {/* Main Content Area */}
        {activeTab === 'calculator' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Location A Card */}
              <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 shadow-lg relative group transition hover:border-indigo-500/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                    <h3 className="font-semibold text-slate-200 text-sm tracking-wide">LOCATION A (START)</h3>
                  </div>
                  <button
                    onClick={() => getCurrentLocation('A')}
                    disabled={loadingGeo === 'A'}
                    className="text-xs bg-slate-700/80 hover:bg-slate-700 text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-600/60 flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50"
                  >
                    <Navigation className={`w-3.5 h-3.5 ${loadingGeo === 'A' ? 'animate-spin' : ''}`} />
                    {loadingGeo === 'A' ? 'Locating...' : 'GPS Location'}
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block">Name / Label</label>
                    <input
                      type="text"
                      value={locA.name}
                      onChange={(e) => setLocA({ ...locA, name: e.target.value })}
                      placeholder="e.g. Dhaka"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Latitude (°N/S)</label>
                      <input
                        type="number"
                        step="any"
                        value={locA.lat}
                        onChange={(e) => setLocA({ ...locA, lat: e.target.value })}
                        placeholder="23.8103"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Longitude (°E/W)</label>
                      <input
                        type="number"
                        step="any"
                        value={locA.lng}
                        onChange={(e) => setLocA({ ...locA, lng: e.target.value })}
                        placeholder="90.4125"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Swap Button Divider */}
              <div className="flex justify-center -my-2 relative z-10">
                <button
                  onClick={handleSwap}
                  title="Swap Location A & B"
                  className="bg-slate-700 hover:bg-indigo-600 text-slate-200 hover:text-white p-2.5 rounded-full border border-slate-600 shadow-md transition transform hover:rotate-180 duration-300 active:scale-90"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Location B Card */}
              <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 shadow-lg relative group transition hover:border-indigo-500/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse"></div>
                    <h3 className="font-semibold text-slate-200 text-sm tracking-wide">LOCATION B (DESTINATION)</h3>
                  </div>
                  <button
                    onClick={() => getCurrentLocation('B')}
                    disabled={loadingGeo === 'B'}
                    className="text-xs bg-slate-700/80 hover:bg-slate-700 text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-600/60 flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50"
                  >
                    <Navigation className={`w-3.5 h-3.5 ${loadingGeo === 'B' ? 'animate-spin' : ''}`} />
                    {loadingGeo === 'B' ? 'Locating...' : 'GPS Location'}
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-400 mb-1 block">Name / Label</label>
                    <input
                      type="text"
                      value={locB.name}
                      onChange={(e) => setLocB({ ...locB, name: e.target.value })}
                      placeholder="e.g. Chittagong"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Latitude (°N/S)</label>
                      <input
                        type="number"
                        step="any"
                        value={locB.lat}
                        onChange={(e) => setLocB({ ...locB, lat: e.target.value })}
                        placeholder="22.3569"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 mb-1 block">Longitude (°E/W)</label>
                      <input
                        type="number"
                        step="any"
                        value={locB.lng}
                        onChange={(e) => setLocB({ ...locB, lng: e.target.value })}
                        placeholder="91.7832"
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Preset Selector */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>Quick Preset Locations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CITY_PRESETS.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => {
                        setLocB({
                          name: city.name,
                          lat: city.lat.toString(),
                          lng: city.lng.toString()
                        });
                      }}
                      className="bg-slate-900/70 hover:bg-indigo-600/30 hover:border-indigo-500/50 text-slate-300 border border-slate-700 text-xs px-2.5 py-1.5 rounded-lg transition active:scale-95 flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-indigo-400" />
                      <span>{city.name}</span>
                      <span className="text-[10px] text-slate-500">({city.country})</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Primary Distance Result Card */}
              <div className="bg-gradient-to-br from-indigo-900/50 via-slate-800 to-slate-900 border border-indigo-500/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <h2 className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-1">
                  Great-Circle Distance
                </h2>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {distanceKm !== null
                      ? unit === 'km'
                        ? distanceKm.toLocaleString(undefined, { maximumFractionDigits: 2 })
                        : distanceMiles.toLocaleString(undefined, { maximumFractionDigits: 2 })
                      : '--'}
                  </span>
                  <span className="text-lg font-semibold text-indigo-400 uppercase">
                    {unit}
                  </span>
                </div>

                {/* Sub info distance */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700/60 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Alternative Unit:</span>
                    <span className="font-semibold text-slate-200">
                      {unit === 'km'
                        ? `${distanceMiles?.toLocaleString(undefined, { maximumFractionDigits: 2 })} Miles`
                        : `${distanceKm?.toLocaleString(undefined, { maximumFractionDigits: 2 })} KM`}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Initial Bearing:</span>
                    <span className="font-semibold text-slate-200">
                      {bearing !== null ? `${bearing.toFixed(1)}° (${getCompassDirection(bearing)})` : '--'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Travel Time Estimates */}
              <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-5 shadow-lg">
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Estimated Straight-Line Travel Times
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {/* Walking */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Footprints className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Walk (5 km/h)</div>
                      <div className="text-sm font-semibold text-slate-100">{formatTravelTime(5)}</div>
                    </div>
                  </div>

                  {/* Cycling */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
                      <Bike className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Bicycle (15 km/h)</div>
                      <div className="text-sm font-semibold text-slate-100">{formatTravelTime(15)}</div>
                    </div>
                  </div>

                  {/* Driving */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Car (80 km/h)</div>
                      <div className="text-sm font-semibold text-slate-100">{formatTravelTime(80)}</div>
                    </div>
                  </div>

                  {/* Flight */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Flight (800 km/h)</div>
                      <div className="text-sm font-semibold text-slate-100">{formatTravelTime(800)}</div>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 mt-3 text-center">
                  *Estimates based on direct geodesic trajectory without terrain or traffic delays.
                </p>
              </div>

              {/* Coordinates Summary */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 text-xs space-y-2 text-slate-400">
                <div className="flex justify-between items-center border-b border-slate-700/40 pb-2">
                  <span className="font-medium text-slate-300">Point A ({locA.name || 'Start'}):</span>
                  <span className="font-mono text-slate-400">{locA.lat}°, {locA.lng}°</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300">Point B ({locB.name || 'End'}):</span>
                  <span className="font-mono text-slate-400">{locB.lat}°, {locB.lng}°</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Math Formula Step-by-Step Breakdown Tab */
          <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
              <div className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-100">Haversine Formula Mathematical Breakdown</h2>
                <p className="text-xs text-slate-400">Step-by-step computation of spherical geodesic distance</p>
              </div>
            </div>

            {mathSteps ? (
              <div className="space-y-6 text-sm">
                
                {/* Math Equation Formula Explanation */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 font-mono text-xs space-y-2 text-indigo-300">
                  <p className="text-slate-400 font-sans text-xs">Standard Haversine Formula:</p>
                  <div>a = sin²(Δφ/2) + cos(φ₁) · cos(φ₂) · sin²(Δλ/2)</div>
                  <div>c = 2 · atan2( √a, √(1−a) )</div>
                  <div>d = R · c &nbsp;&nbsp;(where R = 6,371 km)</div>
                </div>

                {/* Step 1 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-indigo-400 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-600/30 rounded-full flex items-center justify-center text-xs text-indigo-300">1</span>
                    Convert Degrees to Radians (φ & λ)
                  </h3>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-xs font-mono text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>φ₁ (Lat A) = {mathSteps.phi1} rad</div>
                    <div>φ₂ (Lat B) = {mathSteps.phi2} rad</div>
                    <div>Δφ (Lat Diff) = {mathSteps.deltaPhi} rad</div>
                    <div>Δλ (Lon Diff) = {mathSteps.deltaLambda} rad</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-indigo-400 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-600/30 rounded-full flex items-center justify-center text-xs text-indigo-300">2</span>
                    Calculate Square Half-Chord Length (a)
                  </h3>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-xs font-mono text-slate-300">
                    <div>a = sin²({mathSteps.deltaPhi}/2) + cos({mathSteps.phi1}) · cos({mathSteps.phi2}) · sin²({mathSteps.deltaLambda}/2)</div>
                    <div className="mt-1 text-emerald-400 font-bold">a = {mathSteps.aVal}</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-indigo-400 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-600/30 rounded-full flex items-center justify-center text-xs text-indigo-300">3</span>
                    Compute Angular Distance in Radians (c)
                  </h3>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-xs font-mono text-slate-300">
                    <div>c = 2 · atan2( √{mathSteps.aVal}, √(1 - {mathSteps.aVal}) )</div>
                    <div className="mt-1 text-emerald-400 font-bold">c = {mathSteps.cVal} rad</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-indigo-400 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-600/30 rounded-full flex items-center justify-center text-xs text-indigo-300">4</span>
                    Multiply by Earth Mean Radius (R = 6371 km)
                  </h3>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-xs font-mono text-slate-300">
                    <div>d = 6,371 km × {mathSteps.cVal}</div>
                    <div className="mt-1 text-emerald-400 font-bold text-sm">
                      Distance = {mathSteps.km} KM ({mathSteps.miles} Miles)
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="text-center py-8 text-slate-400">Enter valid coordinates to view mathematical breakdown.</div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}