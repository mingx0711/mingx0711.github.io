import json
from pathlib import Path


QUIZ_RESET = ["n", "n", "n", "n"]


def normalize_entry(entry):
    entry["seen"] = 0
    entry["learnedTime"] = 0
    entry["quizResults"] = list(QUIZ_RESET)
    return entry


def split_vocab(entries):
    german = []
    other = []
    for entry in entries:
        normalized = normalize_entry(entry)
        if normalized.get("book") == "German":
            german.append(normalized)
        else:
            other.append(normalized)
    return german, other


def main():
    base_dir = Path(__file__).parent
    merged_path = base_dir / "merged.json"
    german_path = base_dir / "GermanA1~B2.json"
    latin_path = base_dir / "Latin.json"

    with open(merged_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    vocab_list = data.get("vocabList", [])
    german_entries, other_entries = split_vocab(vocab_list)

    german_payload = {"vocabList": german_entries}
    latin_payload = {"vocabList": other_entries}

    with open(german_path, "w", encoding="utf-8") as f:
        json.dump(german_payload, f, indent=2, ensure_ascii=False)

    with open(latin_path, "w", encoding="utf-8") as f:
        json.dump(latin_payload, f, indent=2, ensure_ascii=False)

    print(f"Saved {len(german_entries)} German entries to {german_path}")
    print(f"Saved {len(other_entries)} non-German entries to {latin_path}")


if __name__ == "__main__":
    main()
