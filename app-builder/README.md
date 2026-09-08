# Asim Tech App Builder V3

V3 adds a **Build APK** button.

The button generates a ready-to-build Android Studio/Gradle project ZIP from the current app design. The ZIP includes a GitHub Actions workflow at `.github/workflows/build-apk.yml`.

Workflow:
1. Upload/extract the generated Android project into a GitHub repository.
2. Open GitHub → Actions.
3. Run **Build APK** (or push a change under `app/`).
4. Download the `app-debug.apk` artifact from the completed workflow.

This uses GitHub Actions and does not require a paid API.

Important: the browser itself cannot compile an APK on GitHub Pages. The Build APK button therefore prepares the Android project and build workflow; GitHub Actions performs the actual APK compilation.
