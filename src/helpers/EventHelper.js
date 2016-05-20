/*
 * fulfills(e1, e2)
 *
 * This is similar to different but to an equality function. In order
 * for e2 to fulfill e1, the name must match and all properties on
 * e1 must both exist on e2 and be equal. As an example,
 *
 * const e1 = new Event("example", { check: 1 })
 * const e2 = new Event("exampel", { check: 1, notChecked: 2 })
 *
 * fulfills(e1, e2) === true
 */
export function fulfills (e1, e2) {
  const e1name = e1.event || e1.name
  const e2name = e2.event || e2.name
  if (e1name !== e2name) return false

  const e1properties = e1.properties || {}
  const e2properties = e2.properties || {}

  for (const prop in e1properties) {
    const e1prop = e1properties[prop]
    const e2prop = e2properties[prop]
    if (e1prop && typeof e1prop.includes === 'function') {
      if (!e1prop.includes(e2prop)) return false
    } else {
      if (e1prop !== e2prop) return false
    }
  }

  return true
}

export function containsEvent (eventCollection, event) {
  for (const ev of eventCollection) {
    if (fulfills(ev, event)) {
      return true
    }
  }
  return false
}
