import DiscoverView from "@/views/DiscoveryView.vue";
import { shallowMount } from "@vue/test-utils";

describe("DiscoverView", () => {
  const wrapper = shallowMount(DiscoverView);

  test("Title should have this specific text", () => {
    const title = "Explora";
    expect(wrapper.find("h1").element.textContent).toBe(title);
  });

  test("Search bar should have a specific placeholder text ", () => {
    const placeholder = "Busca aquí tus filtros";
    expect(wrapper.find("searchboxcomponent-stub").props().placeholder).toBe(
      placeholder
    );
  });

  test("If filters button is not selected, display charts are visible", () => {
    expect(wrapper.find("displaycharts-stub").exists()).toBe(true);
    expect(wrapper.find("filterscomponent-stub").exists()).toBe(false);
  });

  test("If filters button is selected, filter tags are visible", async () => {
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find("filterscomponent-stub").exists()).toBe(true);
    expect(wrapper.find("displaycharts-stub").exists()).toBe(false);
  });
});
