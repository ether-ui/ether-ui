<template>
  <e-page>
    <template v-slot:sidebar> </template>
    <template v-slot:content>
      <div class="container">
        <div class="bg-white rounded-min p-5 mb-5">
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <h4>The quick brown fox jumps over the lazy dog</h4>
          <h5>The quick brown fox jumps over the lazy dog</h5>
          <h6>The quick brown fox jumps over the lazy dog</h6>
          <p>
            Quisque feugiat leo massa, eget consequat nibh blandit at.
            Suspendisse aliquam convallis risus id ultricies. Suspendisse vel
            sodales dolor. Cras pretium, diam vitae rutrum consequat, nulla
            mauris tincidunt nisi, vitae congue purus arcu rutrum purus. Ut
            blandit ipsum aliquam, convallis lacus in, lobortis elit. Nunc sed
            lorem diam. Suspendisse justo turpis, malesuada nec sodales et,
            posuere mollis lectus. Duis bibendum tellus a tincidunt feugiat.
            Donec suscipit quam sed enim viverra, sit amet sagittis ipsum porta.
          </p>
        </div>
      </div>

      <div class="container">
        <div class="bg-white rounded-min p-5 mb-5">
          <div class="row gap-1-5">
            <div class="col">
              <button class="btn rounded-min">Button</button>
              <button class="btn rounded-min primary">Button</button>
              <button class="btn rounded-min secondary">Button</button>
              <button class="btn rounded-max tertiary">Button</button>
              <button class="btn bg-darkorchid-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button class="btn rounded-max bg-darkorchid-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </button>
              <button class="btn rounded-max bg-darkorchid-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Test Icon Button
              </button>
              <button class="btn rounded-max bg-citrus-400 text-white" disabled>
                Button
              </button>
              <button
                class="btn btn-border rounded-max bg-white border-darkorchid-600 text-darkorchid-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Test Icon Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bg-white rounded-min p-5 mb-5">
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element primary">
                <label>Label</label>
                <textarea placeholder="Type here..." cols="5"></textarea>
                <p>Helper message</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element secondary">
                <label>Label</label>
                <textarea placeholder="Type here..." cols="5"></textarea>
                <p>Helper message</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element tertiary">
                <label>Label</label>
                <textarea placeholder="Type here..." cols="5"></textarea>
                <p>Helper message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bg-white rounded-min p-5 mb-5">
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element primary">
                <label>Label</label>
                <select>
                  <option>Please select a</option>
                  <option>Please select b</option>
                  <option>Please select c</option>
                </select>
                <p>Helper message</p>
              </div>
            </div>
            <div class="col">
              <label class="form-element-checkbox primary">
                <input type="checkbox" class="rounded-min" />
                Label
              </label>
              <label class="form-element-checkbox secondary">
                <input type="checkbox" />
                Label
              </label>
              <label class="form-element-checkbox tertiary">
                <input type="checkbox" />
              </label>
            </div>
          </div>
          <div class="row gap-1-5">
            <div class="col">
              <label class="form-element-radio primary">
                <input name="tst" type="radio" />
                Label
              </label>
              <label class="form-element-radio secondary">
                <input name="tst" type="radio" />
                Label
              </label>
              <label class="form-element-radio tertiary">
                <input name="tst" type="radio" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bg-white rounded-min p-5">
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element primary">
                <label>Label</label>
                <div class="has-icons">
                  <svg
                    class="prepend-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <input placeholder="Enter here..." />
                  <svg
                    class="append-icon cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p>Helper message</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element secondary">
                <label>Label</label>
                <input placeholder="Type here..." />
                <p>Helper message</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element form-shamrock-700">
                <label>Username</label>
                <input placeholder="Type here..." />
                <p>Enter your username</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element form-darkorchid-600">
                <label>Password</label>
                <input placeholder="Type here..." type="password" />
                <p>hunter2</p>
              </div>
            </div>
          </div>
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label class="text-carnation-500">I have Error</label>
                <input
                  placeholder="Type here..."
                  class="border-carnation-500"
                />
                <p class="text-carnation-500">Please enter valid email!</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Email</label>
                <input placeholder="Type here..." disabled />
                <p>How can we reach you?</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." />
                <p>Helper message</p>
              </div>
            </div>
          </div>
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." />
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." />
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." />
              </div>
            </div>
          </div>
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-min" />
                <p>&nbsp;</p>
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-min" />
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-min" />
              </div>
            </div>
          </div>
          <div class="row gap-1-5">
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-max" />
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-max" />
              </div>
            </div>
            <div class="col">
              <div class="form-element form-goldenrod-700">
                <label>Label</label>
                <input placeholder="Type here..." class="rounded-max" />
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
  components: { EPage },
};
</script>
