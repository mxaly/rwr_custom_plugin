module ApplicationHelper
  def alt_store(store_name, initial_state)
    react_element('alt-store', storeName: store_name, data: initial_state)
  end
end
