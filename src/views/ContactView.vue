<template>
  <div>
    <section class="container" id="contact">
      <div class="row">
        <h2 class="display-2">Contact Us</h2>
      </div>
      <div class="row">
        <div class="contact">
          <div class="container">
            <form
              action="https://formspree.io/f/mjvdladp"
              method="post"
              @submit="validateForm"
            >
              <div class="form-row" id="field">
                <div class="col-25">
                  <label for="fname">First Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Name"
                    pattern="[A-Za-z]+"
                    title="Please enter a valid first name."
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-25">
                  <label for="lname">Last Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Last Name"
                    pattern="[A-Za-z]+"
                    title="Please enter a valid last name."
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-25">
                  <label for="subject">Reach Out!</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Response"
                    style="height: 200px"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="form-row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    validateForm(event) {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    },
  },
};
</script>

<style scoped>
/* Contact */

.container {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.display-2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  margin-bottom: 20px;
}

.col-25 {
  flex: 25%;
}

.col-75 {
  flex: 75%;
}

label {
  font-weight: bold;
  margin: 1px;
  padding: 1px;
}

/* INPUT VALIDATION */

input:invalid:focus {
  background-color: #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

input:required:invalid:focus {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid:focus {
  border-color: #c00000;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

input[type="submit"] {
  background-color: #161818;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #028f5e;
}

#field {
  margin: 1px;
  padding: 1px;
}

/* Custom Validation */

/* FORM VALIDATION */

form:invalid {
  border: 5px solid #ffdddd;
}

form:valid {
  border: 5px solid #ddffdd;
}

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
  }
}
</style>
