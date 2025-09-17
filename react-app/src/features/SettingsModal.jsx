import { useContext, useState } from "react";
import { TimerContext } from "../components/TimerContext";

export default function SettingsModal() {
  const {
    isSoundOn, setSoundOn,
    normalBreakTime, setNormalBreakTime,
    longBreakTime, setLongBreakTime,
    pomodoroTime, setPomodoroTime,
    minimumStreaks, setMinimumStreaks,
    isModalOpen, setIsModalOpen
  } = useContext(TimerContext);

  const [localPomodoroTime, setLocalPomodoroTime] = useState(pomodoroTime / (60 * 1000));
  const [localNormalBreakTime, setLocalNormalBreakTime] = useState(normalBreakTime / (60 * 1000));
  const [localLongBreakTime, setLocalLongBreakTime] = useState(longBreakTime / (60 * 1000));
  const [localMinimumStreaks, setLocalMinimumStreaks] = useState(minimumStreaks);
  const [localIsSoundOn, setLocalIsSoundOn] = useState(isSoundOn);

  const handleSave = (e) => {
    e.preventDefault();
    setPomodoroTime(Number(localPomodoroTime) * 60 * 1000);
    setNormalBreakTime(Number(localNormalBreakTime) * 60 * 1000);
    setLongBreakTime(Number(localLongBreakTime) * 60 * 1000);
    setMinimumStreaks(Number(localMinimumStreaks));
    setSoundOn(localIsSoundOn);
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="settings-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="settings-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Cabeçalho */}
            <div className="settings-modal-header">
              <h2 className="settings-modal-title">Configurações</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="settings-modal-close-button"
              >
                <svg className="settings-modal-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSave} className="settings-modal-form">
              <div>
                <label htmlFor="pomodoro-duration" className="settings-modal-label">
                  Duração do Pomodoro (minutos)
                </label>
                <input
                  type="number"
                  id="pomodoro-duration"
                  value={localPomodoroTime}
                  onChange={(e) => setLocalPomodoroTime(e.target.value === "" ? "" : Number(e.target.value))}
                  min="1"
                  className="settings-modal-input"
                />
              </div>

              <div>
                <label htmlFor="short-break-duration" className="settings-modal-label">
                  Duração da Pausa Curta (minutos)
                </label>
                <input
                  type="number"
                  id="short-break-duration"
                  value={localNormalBreakTime}
                  onChange={(e) => setLocalNormalBreakTime(e.target.value === "" ? "" : Number(e.target.value))}
                  min="1"
                  className="settings-modal-input"
                />
              </div>

              <div>
                <label htmlFor="long-break-duration" className="settings-modal-label">
                  Duração da Pausa Longa (minutos)
                </label>
                <input
                  type="number"
                  id="long-break-duration"
                  value={localLongBreakTime}
                  onChange={(e) => setLocalLongBreakTime(e.target.value === "" ? "" : Number(e.target.value))}
                  min="1"
                  className="settings-modal-input"
                />
              </div>

              <div>
                <label htmlFor="pomodoros-to-long-break" className="settings-modal-label">
                  Mínimo de Pomodoros para Pausa Longa
                </label>
                <input
                  type="number"
                  id="pomodoros-to-long-break"
                  value={localMinimumStreaks}
                  onChange={(e) => setLocalMinimumStreaks(e.target.value === "" ? "" : Number(e.target.value))}
                  min="1"
                  className="settings-modal-input"
                />
              </div>

              <div className="settings-modal-flex-center-y">
                <input
                  type="checkbox"
                  id="sound-on"
                  checked={localIsSoundOn}
                  onChange={(e) => setLocalIsSoundOn(e.target.checked)}
                  className="settings-modal-checkbox-input"
                />
                <label htmlFor="sound-on" className="settings-modal-label-checkbox">
                  Som Ativado
                </label>
              </div>

              <div className="settings-modal-footer">
                <button type="submit" className="settings-modal-save-button">
                  Salvar Configurações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
