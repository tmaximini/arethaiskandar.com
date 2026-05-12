/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {
  if (typeof window === "undefined") return
  const tryInit = () => {
    if (!window.netlifyIdentity) return false
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/"
        })
      }
    })
    return true
  }
  if (!tryInit()) {
    const interval = setInterval(() => {
      if (tryInit()) clearInterval(interval)
    }, 200)
  }
}
