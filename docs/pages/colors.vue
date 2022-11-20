<template>
  <e-page>
    <template v-slot:sidebar>
      <p class="text-base-content-light">Table of Contents</p>
      <ul class="list-none m-0 p-0 list-toc">
        <li>
          <a href="#default-colors">Default Colors</a>
        </li>
      </ul>
    </template>
    <template v-slot:content>
      <h2 class="font-bold mb-2">Colors</h2>
      <p class="text-slategray-600" style="font-size: 1.25rem">
        EtherUI comes with a bunch of predefined colors, CSS variables and CSS
        classes.
      </p>
      <hr />
      For every default or
      <NuxtLink to="/configuration#colors">custom</NuxtLink> color, you will
      have the following 3 things:
      <ul>
        <li>
          <code>var(--color-name)</code>
          <a
            href="https://www.w3schools.com/css/css3_variables.asp"
            target="_blank"
          >
            CSS variable</a
          >
          that you can use in your CSS
        </li>
        <li>
          <code>.bg-color-name</code> CSS class that you can use in your HTML to
          set the background color
        </li>
        <li>
          <code>.text-color-name</code> CSS class that you can use in your HTML
          to set the text color
        </li>
        <li>
          <code>.border-color-name</code> CSS class that you can use in your HTML
          to set the text color
        </li>
      </ul>
      So, if you are considering color named carnation-400, that means that
      you'll have the following things:
      <ul>
        <li>
          <code>var(--carnation-400)</code>
        </li>
        <li>
          <code>.bg-carnation-400</code>
        </li>
        <li>
          <code>.text-carnation-400</code>
        </li>
        <li>
          <code>.border-carnation-400</code>
        </li>
      </ul>
      <h5 class="mt-8 mb-4 font-bold" id="default-colors">Default Colors</h5>
      <div class="container">
        <div class="row">
          <div class="col-sm-6" v-for="(color, i) in colors">
            <h6 class="font-bold my-4">{{ color.name }}</h6>
            <div class="container mb-2" v-for="variant in color.variants">
              <div class="row gap-1">
                <div class="col">
                  <div :class="'bg-' + variant.name" class="color-preview">
                    <div class="col-b">
                      <div class="col-b-circle"></div>
                      <div>{{ variant.code1 }}</div>
                      <div class="col-code">{{ variant.code2 }}</div>
                    </div>
                    <div class="col-w">
                      <div class="col-w-circle"></div>
                      <div>{{ variant.code3 }}</div>
                      <div class="col-code">{{ variant.code4 }}</div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <p>var(--{{ variant.name }})</p>
                  <p>.bg-{{ variant.name }}</p>
                  <p>.text-{{ variant.name }}</p>
                  <p>.border-{{ variant.name }}</p>
                  <p class="text-base-content-light">{{ variant.hex }}</p>
                  <p class="text-base-content-light">{{ variant.rgba }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </e-page>
</template>
<script>
import EPage from "~/components/EPage";
export default {
  head() {
    return {
      title: "Colors - EtherUI",
    };
  },
  components: { EPage },
  data() {
    return {
      colors: [
        {
          name: "Carnation",
          variants: [
            {
              name: "carnation-50",
              hex: "#feeff0",
              rgba: "rgb(254, 239, 240)",
              code1: "18.82 AAA",
              code2: "AAA",
              code3: "1.12",
              code4: "",
            },
            {
              name: "carnation-100",
              hex: "#fbcccf",
              rgba: "rgb(251, 204, 207)",
              code1: "14.64 AAA",
              code2: "AAA",
              code3: "1.43",
              code4: "",
            },
            {
              name: "carnation-200",
              hex: "#f9b3b8",
              rgba: "rgb(249, 179, 184)",
              code1: "12.17 AAA",
              code2: "AAA",
              code3: "1.73",
              code4: "",
            },
            {
              name: "carnation-300",
              hex: "#f79098",
              rgba: "rgb(247, 144, 152)",
              code1: "9.40 AAA",
              code2: "AAA",
              code3: "2.23",
              code4: "",
            },
            {
              name: "carnation-400",
              hex: "#f57b84",
              rgba: "rgb(245, 123, 132)",
              code1: "8.05 AAA",
              code2: "AAA",
              code3: "2.61",
              code4: "",
            },
            {
              name: "carnation-500",
              hex: "#f35a65",
              rgba: "rgb(243, 90, 101)",
              code1: "6.46 AAA",
              code2: "AA",
              code3: "3.25 AA",
              code4: "",
            },
            {
              name: "carnation-600",
              hex: "#dd525c",
              rgba: "rgb(221, 82, 92)",
              code1: "5.44 AAA",
              code2: "AA",
              code3: "3.86 AA",
              code4: "",
            },
            {
              name: "carnation-700",
              hex: "#ad4048",
              rgba: "rgb(173, 64, 72)",
              code1: "3.60 AA",
              code2: "",
              code3: "5.83 AAA",
              code4: "AA",
            },
            {
              name: "carnation-800",
              hex: "#863238",
              rgba: "#rgb(254, 239, 240)",
              code1: "2.53",
              code2: "",
              code3: "8.31 AAA",
              code4: "AAA",
            },
            {
              name: "carnation-900",
              hex: "#66262a",
              rgba: "#rgb(254, 239, 240)",
              code1: "1.88",
              code2: "",
              code3: "11.20 AAA",
              code4: "AAA",
            },
          ],
        },
        {
          name: "Tango",
          variants: [
            {
              name: "tango-50",
              hex: "#fdf2e8",
              rgba: "rgb(254, 239, 240)",
              code1: "19.04 AAA",
              code2: "AAA",
              code3: "1.10",
              code4: "",
            },
            {
              name: "tango-100",
              hex: "#f9d7b8",
              rgba: "rgb(249, 215, 184)",
              code1: "15.44 AAA",
              code2: "AAA",
              code3: "1.36",
              code4: "",
            },
            {
              name: "tango-200",
              hex: "#f6c396",
              rgba: "rgb(246, 195, 150)",
              code1: "13.17 AAA",
              code2: "AAA",
              code3: "1.60 ",
              code4: "",
            },
            {
              name: "tango-300",
              hex: "#f2a866",
              rgba: "rgb(242, 168, 102)",
              code1: "10.57 AAA",
              code2: "AAA",
              code3: "1.99 ",
              code4: "",
            },
            {
              name: "tango-400",
              hex: "#ef9749",
              rgba: "rgb(239, 151, 73)",
              code1: "9.19 AAA",
              code2: "AAA",
              code3: "2.28",
              code4: "",
            },
            {
              name: "tango-500",
              hex: "#eb7d1b",
              rgba: "rgb(235, 125, 27)",
              code1: "7.48 AAA",
              code2: "AA",
              code3: "2.81",
              code4: "",
            },
            {
              name: "tango-600",
              hex: "#d67219",
              rgba: "rgb(214, 114, 25)",
              code1: "6.28 AAA",
              code2: "AA",
              code3: "3.34 AA",
              code4: "",
            },
            {
              name: "tango-700",
              hex: "#a75913",
              rgba: "rgb(167, 89, 19)",
              code1: "4.08 AA",
              code2: "",
              code3: "5.15 AAA",
              code4: "AA",
            },
            {
              name: "tango-800",
              hex: "#81450f",
              rgba: "rgb(129, 69, 15)",
              code1: "2.79",
              code2: "",
              code3: "7.52 AAA",
              code4: "AAA",
            },
            {
              name: "tango-900",
              hex: "#63350b",
              rgba: "rgb(99, 53, 11)",
              code1: "2.04",
              code2: "",
              code3: "10.27 AAA",
              code4: "AAA",
            },
          ],
        },
        {
          name: "Goldenrod",
          variants: [
            {
              name: "goldenrod-50",
              hex: "#fcf6e8",
              rgba: "rgb(252, 246, 232)",
              code1: "19.49 AAA",
              code2: "AAA",
              code3: "1.08",
              code4: "",
            },
            {
              name: "goldenrod-100",
              hex: "#f7e2b9",
              rgba: "rgb(247, 226, 185)",
              code1: "16.53 AAA",
              code2: "AAA",
              code3: "1.27",
              code4: "",
            },
            {
              name: "goldenrod-200",
              hex: "#f3d497",
              rgba: "rgb(243, 212, 151)",
              code1: "14.68 AAA",
              code2: "AAA",
              code3: "1.43 ",
              code4: "",
            },
            {
              name: "goldenrod-300",
              hex: "#eec167",
              rgba: "rgb(238, 193, 103)",
              code1: "12.46 AAA",
              code2: "AAA",
              code3: "1.69",
              code4: "",
            },
            {
              name: "goldenrod-400",
              hex: "#eab549",
              rgba: "rgb(234, 181, 73)",
              code1: "11.20 AAA",
              code2: "AAA",
              code3: "1.87",
              code4: "",
            },
            {
              name: "goldenrod-500",
              hex: "#e5a21c",
              rgba: "rgb(229, 162, 28)",
              code1: "9.52 AAA",
              code2: "AAA",
              code3: "2.21",
              code4: "",
            },
            {
              name: "goldenrod-600",
              hex: "#d09319",
              rgba: "rgb(208, 147, 25)",
              code1: "7.87 AAA",
              code2: "AAA",
              code3: "2.67",
              code4: "",
            },
            {
              name: "goldenrod-700",
              hex: "#a37314",
              rgba: "rgb(163, 115, 20)",
              code1: "5.02 AAA",
              code2: "AA",
              code3: "4.18 AA",
              code4: "",
            },
            {
              name: "goldenrod-800",
              hex: "#7e590f",
              rgba: "rgb(126, 89, 15)",
              code1: "3.32 AA",
              code2: "",
              code3: "6.32 AAA",
              code4: "AA",
            },
            {
              name: "goldenrod-900",
              hex: "#60440c",
              rgba: "rgb(96, 68, 12)",
              code1: "2.33",
              code2: "",
              code3: "9.01 AAA",
              code4: "AAA",
            },
          ],
        },
        {
          name: "Sunglow",
          variants: [
            {
              name: "sunglow-50",
              hex: "#fcfaec",
              rgba: "rgb(252, 250, 236)",
              code1: "20.02 AAA",
              code2: "AAA",
              code3: "1.05",
              code4: "",
            },
            {
              name: "sunglow-100",
              hex: "#f5efc3",
              rgba: "rgb(245, 239, 195)",
              code1: "18.02 AAA",
              code2: "AAA",
              code3: "1.17 ",
              code4: "",
            },
            {
              name: "sunglow-200",
              hex: "#f1e7a7",
              rgba: "rgb(241, 231, 167)",
              code1: "16.73 AAA",
              code2: "AAA",
              code3: "1.26 ",
              code4: "",
            },
            {
              name: "sunglow-300",
              hex: "#eadc7e",
              rgba: "rgb(234, 220, 126)",
              code1: "15.04 AAA",
              code2: "AAA",
              code3: "1.40",
              code4: "",
            },
            {
              name: "sunglow-400",
              hex: "#e6d565",
              rgba: "rgb(230, 213, 101)",
              code1: "14.07 AAA",
              code2: "AAA",
              code3: "1.49",
              code4: "",
            },
            {
              name: "sunglow-500",
              hex: "#e0cb3f",
              rgba: "rgb(224, 203, 63)",
              code1: "12.78 AAA",
              code2: "AAA",
              code3: "1.64",
              code4: "",
            },
            {
              name: "sunglow-600",
              hex: "#ccb939",
              rgba: "rgb(204, 185, 57)",
              code1: "10.57 AAA",
              code2: "AAA",
              code3: "1.99",
              code4: "",
            },
            {
              name: "sunglow-700",
              hex: "#9f902d",
              rgba: "rgb(159, 144, 45)",
              code1: "6.50 AAA",
              code2: "AA",
              code3: "3.23 AA",
              code4: "",
            },
            {
              name: "sunglow-800",
              hex: "#7b7023",
              rgba: "rgb(123, 112, 35)",
              code1: "4.18 AA",
              code2: "",
              code3: "5.02 AAA",
              code4: "AA",
            },
            {
              name: "sunglow-900",
              hex: "#5e551a",
              rgba: "rgb(94, 85, 26)",
              code1: "2.79",
              code2: "",
              code3: "7.53 AAA",
              code4: "AAA",
            },
          ],
        },
        {
          name: "Citrus",
          variants: [
            {
              name: "citrus-50",
              hex: "#f7faea",
              rgba: "rgb(247, 250, 234)",
              code1: "19.82 AAA",
              code2: "AAA",
              code3: "1.06",
              code4: "",
            },
            {
              name: "citrus-100",
              hex: "#e5efbd",
              rgba: "rgb(229, 239, 189)",
              code1: "17.41 AAA",
              code2: "AAA",
              code3: "1.21 ",
              code4: "",
            },
            {
              name: "citrus-200",
              hex: "#d8e89d",
              rgba: "rgb(216, 232, 157)",
              code1: "15.95 AAA",
              code2: "AAA",
              code3: "1.32",
              code4: "",
            },
            {
              name: "citrus-300",
              hex: "#c7dd70",
              rgba: "rgb(199, 221, 112)",
              code1: "14.00 AAA",
              code2: "AAA",
              code3: "1.50",
              code4: "",
            },
            {
              name: "citrus-400",
              hex: "#bcd654",
              rgba: "rgb(188, 214, 84)",
              code1: "12.88 AAA",
              code2: "AAA",
              code3: "1.63 ",
              code4: "",
            },
            {
              name: "citrus-500",
              hex: "#abcc29",
              rgba: "rgb(171, 204, 41)",
              code1: "11.40 AAA",
              code2: "AAA",
              code3: "1.84",
              code4: "",
            },
            {
              name: "citrus-600",
              hex: "#9cba25",
              rgba: "rgb(156, 186, 37)",
              code1: "9.46 AAA",
              code2: "AAA",
              code3: "2.22",
              code4: "",
            },
            {
              name: "citrus-700",
              hex: "#79911d",
              rgba: "rgb(121, 145, 29)",
              code1: "5.88 AAA",
              code2: "AA",
              code3: "3.57 AA",
              code4: "",
            },
            {
              name: "citrus-800",
              hex: "#5e7017",
              rgba: "rgb(94, 112, 23)",
              code1: "3.81 AA",
              code2: "",
              code3: "5.52 AAA",
              code4: "AA",
            },
            {
              name: "citrus-900",
              hex: "#5e551a",
              rgba: "rgb(94, 85, 26)",
              code1: "2.61",
              code2: "",
              code3: "8.03 AAA",
              code4: "AA",
            },
          ],
        },
        {
          name: "Lightgreen",
          variants: [
            {
              name: "lightgreen-50",
              hex: "#edfaef",
              rgba: "rgb(237, 250, 239)",
              code1: "19.52 AAA",
              code2: "AAA",
              code3: "1.08",
              code4: "",
            },
            {
              name: "lightgreen-100",
              hex: "#c7efce",
              rgba: "rgb(199, 239, 206)",
              code1: "16.67 AAA",
              code2: "AAA",
              code3: "1.26 ",
              code4: "",
            },
            {
              name: "lightgreen-200",
              hex: "#ace7b6",
              rgba: "rgb(172, 231, 182)",
              code1: "14.86 AAA",
              code2: "AAA",
              code3: "1.41",
              code4: "",
            },
            {
              name: "lightgreen-300",
              hex: "#86dc94",
              rgba: "rgb(134, 220, 148)",
              code1: "12.68 AAA",
              code2: "AAA",
              code3: "1.66",
              code4: "",
            },
            {
              name: "lightgreen-400",
              hex: "#6fd580",
              rgba: "rgb(111, 213, 128)",
              code1: "11.51 AAA",
              code2: "AAA",
              code3: "1.83",
              code4: "",
            },
            {
              name: "lightgreen-500",
              hex: "#4bcb60",
              rgba: "rgb(75, 203, 96)",
              code1: "10.01 AAA",
              code2: "AAA",
              code3: "2.10",
              code4: "",
            },
            {
              name: "lightgreen-600",
              hex: "#44b957",
              rgba: "rgb(68, 185, 87)",
              code1: "5.22 AAA",
              code2: "AA",
              code3: "2.52",
              code4: "",
            },
            {
              name: "lightgreen-700",
              hex: "#359044",
              rgba: "rgb(53, 144, 68)",
              code1: "5.22 AAA",
              code2: "AA",
              code3: "4.02 AA",
              code4: "",
            },
            {
              name: "lightgreen-800",
              hex: "#297035",
              rgba: "rgb(41, 112, 53)",
              code1: "3.46 AA",
              code2: "",
              code3: "6.06 AAA",
              code4: "AA",
            },
            {
              name: "lightgreen-900",
              hex: "#205528",
              rgba: "rgb(32, 85, 40)",
              code1: "2.39",
              code2: "",
              code3: "8.78 AAA",
              code4: "AAA",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.color-preview {
  border: 1px solid #e9ebf8;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
}

.col-b,
.col-w {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 7px;
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #33313c;
}

.col-b {
  margin-bottom: 6px;
}

.col-code {
  font-size: 8px;
}

.col-b-circle {
  width: 12px;
  height: 12px;
  background: #33313c;
  border: 1px solid #e9ebf8;
  border-radius: 10px;
}
.col-w-circle {
  width: 12px;
  height: 12px;
  background: #ffffff;
  border: 1px solid #e9ebf8;
  border-radius: 10px;
}
</style>
