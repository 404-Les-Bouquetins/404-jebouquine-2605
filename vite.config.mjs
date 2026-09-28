import { defineConfig } from 'vite'

//rediriger à l'url('/kit-graphique.html')
function redirectToKitGraphique(req, res, next) {
  if (req.url === '/')
    req.url = '/kit-graphique.html'

  next()
}

//lui dire ou se trouve la racine du site
export default defineConfig({
  root: 'docs/kit-graphique/',

  plugins:
  [
    {
      name: 'default-html',
      configureServer(server)
      {
        server.middlewares.use(redirectToKitGraphique)
      },
    },
  ],
})

