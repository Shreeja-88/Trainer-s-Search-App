import sampleTrainers from "../data/sampleTrainers";

const STORAGE_KEY = "demo_trainers";

export function getTrainers() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : sampleTrainers;
}

export function saveTrainers(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addTrainer(trainer) {
  const trainers = getTrainers();
  trainer.id = Date.now();
  trainers.push(trainer);
  saveTrainers(trainers);
}

export function updateTrainer(updated) {
  const trainers = getTrainers().map(t =>
    t.id === updated.id ? updated : t
  );
  saveTrainers(trainers);
}

export function deleteTrainer(id) {
  const trainers = getTrainers().filter(t => t.id !== id);
  saveTrainers(trainers);
}
