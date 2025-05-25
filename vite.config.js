import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'main.html',
        home: 'home.html',
        login: 'login.html',
        appointment: 'appointment.html',
        homeRemedies: 'HomeRemedies.html',
        contact: 'contact-us.html',
        about: 'about-us.html'
      }
    }
  }
});