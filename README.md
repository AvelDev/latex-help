# LaTeX Ściąga

Interaktywna, nowoczesna ściąga z najpopularniejszymi komendami systemu LaTeX. Projekt stworzony dla studentów i pracowników naukowych, aby ułatwić szybkie odnajdywanie potrzebnych poleceń.

## 🚀 Funkcje

- **Dynamiczne wyszukiwanie:** Filtrowanie wyników w czasie rzeczywistym po nazwach, opisach i słowach kluczowych.
- **Kategorie:** Szybki dostęp do sekcji takich jak Matematyka, Tabele, Grafika czy Błędy.
- **Dark Mode:** Interfejs zoptymalizowany pod kątem pracy wieczorami i czytelności kodu.
- **Brak zależności:** Czysty HTML/JS/CSS — działa natychmiast po otwarciu `index.html`.

## 🛠️ Rozbudowa i dodawanie treści

### Jak dodać nową komendę?

Wszystkie treści znajdują się w pliku `index.html`. Aby dodać nową komendę do istniejącej sekcji, dodaj element `.item` wewnątrz `.items`:

```html
<div class="item">
  <code>\nazwaKomendy{argument}</code>
  <div class="desc">Krótki opis tego, co robi ta komenda.</div>
</div>
```

### Jak dodać nową sekcję?

Dodaj nowy blok `.section` w `index.html`. Pamiętaj o atrybutach danych:

- `data-group`: musi odpowiadać kategorii w menu nawigacji.
- `data-keywords`: lista słów (oddzielona spacjami), po których wyszukiwarka znajdzie tę sekcję.

```html
<div
  class="section"
  data-group="matematyka"
  data-keywords="całka integracja suma"
>
  <div class="section-header">
    <span class="section-tag pink">Matematyka</span>
    <span class="section-title">Całki i Sumy</span>
  </div>
  <div class="items">
    <!-- tu wstaw elementy .item -->
  </div>
</div>
```

### Zmiana kolorystyki

W pliku `styles.css` znajdziesz sekcję `:root`. Możesz tam zmienić główne kolory aplikacji:

- `--accent`: główny kolor akcentowy (domyślnie neonowy żółty).
- `--accent2`: drugi kolor akcentowy (niebieski).
- `--bg`: kolor tła strony.

## 📄 Licencja

Projekt dostępny do swobodnego użytku i modyfikacji.
