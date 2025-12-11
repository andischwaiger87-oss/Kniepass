import React, { useState } from 'react'
import Layout from './components/Layout'
import AttractScreen from './components/AttractScreen'
import Timeline from './components/Timeline'
import StoryModal from './components/StoryModal'

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <Layout>
      {!hasStarted ? (
        <AttractScreen onStart={() => setHasStarted(true)} />
      ) : (
        <div className="flex flex-col h-full w-full">
          {/* Header / Nav could go here */}
          <header className="absolute top-0 left-0 p-8 z-30 w-full flex justify-between items-center pointer-events-none">
            <span className="text-xl font-bold tracking-widest uppercase text-slate-500">Festung Kniepass</span>
            <button
              onClick={() => setHasStarted(false)}
              className="pointer-events-auto px-6 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-sm uppercase tracking-wider transition-colors border border-slate-700"
            >
              Start
            </button>
          </header>

          <div className="flex-1 overflow-hidden pt-20">
            <Timeline onSelectEvent={setSelectedEvent} />
          </div>
        </div>
      )}

      {selectedEvent && (
        <StoryModal item={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </Layout>
  )
}

export default App
