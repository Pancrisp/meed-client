import { mount } from "@vue/test-utils";
import ShareItem from "@/components/ShareItem.vue";
import NewOrderModal from "@/components/modals/NewOrderModal.vue";

describe("Buying shares", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(NewOrderModal, {
      propsData: {
        shares: {
          _id: "5ad473c68d64a30aea17bc2a",
          symbol: "GXL",
          price: 5.31,
          date: "2018-04-22T03:14:53.304Z",
          name: "Greencross Limited",
          __v: 2
        }
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe("Share Item", () => {
  it("renders props.shares when passed", () => {
    const wrapper = mount(ShareItem, {
      propsData: {
        shares: {
          _id: "5ad473c68d64a30aea17bc2a",
          symbol: "GXL",
          price: 5.31,
          date: "2018-04-22T03:14:53.304Z",
          name: "Greencross Limited",
          __v: 2
        }
      }
    });
    expect(wrapper.props().shares.symbol).toBe("GXL");
  });
});
