<template>
  <li class="brand-rating" :style="{
    color
  }">
    <span :style="{
      'background-color': pSBC(0.7, color),
    }">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.631 5.11934C13.5891 4.99592 13.512 4.88747 13.4092 4.80738C13.3063 4.72729 13.1823 4.67908 13.0524 4.66868L9.25169 4.36668L7.60703 0.72601C7.55465 0.608751 7.46945 0.509157 7.36172 0.439248C7.25399 0.369339 7.12833 0.332102 6.99991 0.332031C6.87148 0.331961 6.74578 0.36906 6.63798 0.438851C6.53017 0.508642 6.44487 0.608142 6.39236 0.725343L4.74769 4.36668L0.947025 4.66868C0.819329 4.67879 0.697251 4.72548 0.595395 4.80316C0.49354 4.88084 0.416221 4.98622 0.372687 5.1067C0.329154 5.22717 0.321251 5.35763 0.349922 5.48248C0.378593 5.60733 0.442626 5.72127 0.534359 5.81068L3.34303 8.54868L2.34969 12.85C2.31953 12.9802 2.3292 13.1165 2.37744 13.2411C2.42568 13.3657 2.51027 13.473 2.62023 13.549C2.73019 13.6249 2.86044 13.6661 2.99408 13.6671C3.12772 13.6681 3.25859 13.629 3.36969 13.5547L6.99969 11.1347L10.6297 13.5547C10.7432 13.6301 10.8772 13.6689 11.0134 13.6659C11.1497 13.6629 11.2818 13.6183 11.392 13.538C11.5021 13.4577 11.585 13.3456 11.6295 13.2167C11.6741 13.0879 11.6781 12.9485 11.641 12.8173L10.4217 8.55068L13.4457 5.82934C13.6437 5.65068 13.7164 5.37201 13.631 5.11934Z"
          :fill="color" />
      </svg>
      {{ rating }}
    </span>
    <div :style="{
      'background-color': pSBC(0.7, color),
    }">
      <span>{{ tag }}</span>
      <p>Valoracion media de {{ amount }} opiniones</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['rating', 'tag', 'color'],
  methods: {
    pSBC(p, c0, c1, l) {
      let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof (c1) == "string";
      if (typeof (p) != "number" || p < -1 || p > 1 || typeof (c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a)) return null;
      if (!this.pSBCr) this.pSBCr = (d) => {
        let n = d.length, x = {};
        if (n > 9) {
          [r, g, b, a] = d = d.split(","), n = d.length;
          if (n < 3 || n > 4) return null;
          x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
        } else {
          if (n == 8 || n == 6 || n < 4) return null;
          if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
          d = i(d.slice(1), 16);
          if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
          else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
        } return x
      };
      h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h, f = this.pSBCr(c0), P = p < 0, t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p;
      if (!f || !t) return null;
      if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
      else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
      a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
      if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
      else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
    }
  }
}
</script>
