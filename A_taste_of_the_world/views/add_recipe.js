<div>
  <form action="/recipe-add" method="POST" class="add-product-form">
    <div class="form-group">
      <label for="recipe-name">Recipe Name</label>
      <input
        type="text"
        class="form-control"
        id="recipe-name"
        placeholder="Recette du boeuf bourgignon"
      />
    </div>
    <div class="form-group">
      <label for="region">Recipe's Region</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="description">Recipe's Description</label>
      <input
        type="text"
        class="form-control"
        id="recipe-desc"
        placeholder="Description"
      />
    </div>
    <div class="form-group">
      <label for="description">Recipe's Description</label>
      <textarea class="form-control" id="recipe-desc" rows="3" />
    </div>
  </form>
</div>;
