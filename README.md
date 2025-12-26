# Aplikacja w React Native z użyciem Expo

## Opis aplikacji
Do stworzenia tej aplikacji wykorzystano React Native oraz Expo. Aplikacja umożliwia pobieranie lokalizacji urządzenia, wyświetlając współrzędne, dodawanie prostych notatek oraz pobiera dane z API JSONPlaceholder https://my-json-server.typicode.com/typicode/demo/posts.
Składa się ona z 3 ekranów - powitalnego, ekranu z lokalizacją i ekranu z notatkami i danymi pobieranymi z API.
Dodane zostały handlery do warunków brzegowych takich jak brak internetu, brak pozwolenia na pobranie lokalizacji urządzenia i wystąpienie błędów podczas użytkowania aplikacji.
Obsługa pobierania lokalizacji to wybrana przeze mnie natywna funkcja urządzenia mobilnego, wybrana ze względu na to że jest to jedna z podstawowych funkcji oraz zapewnia prostotę podczas testowania i możliwość wykorzystania tej funkcjonalności do pomysłu stworzenia aplikacji do "notatek terenowych". Funkcja ta, jak i całość funkcjonalności wyżej opisywanej aplikacji była przetestowana na rzeczywistym urządzeniu mobilnym Samsung z Androidem, z pomocą aplikacji Expo Go. 

## Funkcjonalności

- **Ekran startowy (Onboarding)**  
  Ekran powitalny prezentujący nazwę aplikacji oraz krótki opis jej przeznaczenia. Umożliwia przejście do dalszej części aplikacji.
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/c62a4e93-cfb8-48c4-bf41-aa7471405fb0" />

- **Obsługa lokalizacji GPS (funkcja natywna)**  
  Aplikacja pobiera aktualną lokalizację użytkownika z wykorzystaniem biblioteki `expo-location`.  
  Obsługiwane są następujące przypadki:
  - brak zgody na dostęp do lokalizacji,
  - wyłączone usługi lokalizacji w systemie,
  - komunikaty o błędach oraz możliwość ponownej próby.
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/1c64ccea-5f3b-493e-a81f-d4a2d3b43a21" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/55e390af-0b38-4e07-8927-05e0ccebed00" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/f07c06a5-6008-4d59-bedc-ae35da2cc357" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/ee2dea7a-14e1-4ab8-a9d6-5bb062bf9c9d" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/c94e11d9-cbba-451e-a122-d3bee9b60024" />

- **Tworzenie notatek**  
  Użytkownik może dodawać własne notatki poprzez formularz zawierający:
  - tytuł notatki,
  - treść notatki.
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/904d88eb-018c-4d3f-96a8-9e2404f47da9" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/f23547a3-85f9-49f9-bc9b-a3ccc30f25a2" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/d5591a96-844f-4441-b86f-ac0056219ab5" />

<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/b5917f51-3bda-420d-9d80-e43c1bbc9abc" />

  Notatki są przechowywane w lokalnym stanie aplikacji (bez trwałego zapisu danych).

- **Lista notatek**  
  Utworzone notatki są wyświetlane na liście w obrębie jednego ekranu.

- **Integracja z API**  
  Aplikacja komunikuje się z publicznym, mockowym API (`my-json-server.typicode.com`) w celu pobrania przykładowych danych.  
  Integracja ta służy do demonstracji komunikacji sieciowej (GET request).
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/ee9a8b4d-bb72-468a-a1de-f80828fca4f0" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/31d15ad6-7a6f-4b0b-8787-ea4491e2795e" />

- **Obsługa braku internetu**  
  Aplikacja monitoruje stan połączenia sieciowego przy użyciu biblioteki `@react-native-community/netinfo`.  
  W przypadku braku internetu użytkownik otrzymuje czytelny komunikat, a operacje wymagające połączenia sieciowego są odpowiednio obsługiwane.
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/13c9265f-c42c-4be7-afe9-efff3fcb6cae" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/e647a643-95dd-4f9b-b47a-8284bdf98e75" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/c791ffed-0b70-4f08-9e9a-5092ee07ab27" />
<img width="738" height="1600" alt="image" src="https://github.com/user-attachments/assets/c0f1501a-9bf4-461b-b4d7-84d50669d8f1" />

Podczas testów sprawdzono m.in.:
- pobieranie lokalizacji GPS,
- obsługę braku zgody na lokalizację,
- obsługę braku internetu,
- poprawność działania formularza dodawania notatek.

## Zastosowane technologie:
- React Native
- Expo
- Expo Router (routing między ekranami)
- expo-location (dostęp do lokalizacji GPS)
- @react-native-community/netinfo (sprawdzanie stanu połączenia internetowego)
- Publiczne mock API (JSON Server)


## W celu uruchomienia aplikacji:
- wymagany jest npm 
- komenda 'npm start' uruchamia aplikacje
- mozliwosc testowania na Expo Go po zainstalowaniu tej aplikacji na rzeczywistym urządzeniu mobilnym i zeskanowaniu kodu QR pojawiającego się w terminalu po komendzie 'npm start'
