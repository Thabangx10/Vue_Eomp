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
                    minlength="3"
                    maxlength="20"
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
                    minlength="3"
                    maxlength="20"
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
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333333;
}

.form-row {
  margin-bottom: 30px;
}

.col-25 {
  flex: 0 0 25%;
}

.col-75 {
  flex: 0 0 75%;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  color: #333333;
}

input[type="submit"] {
  background-color: #000000;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
  background-color: #52b95f;
}

input:invalid:focus {
  border-color: #ff3333;
}

input:valid {
  border-color: #33cc33;
}

input:required:invalid:focus {
  border-color: #cc0000;
}

input:required:invalid:focus {
  border-color: #cc0000;
}

/* Mobile Responsive */

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
  }
}
</style>