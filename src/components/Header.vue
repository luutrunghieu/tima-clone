<template>
  <header id="header" class="u-margin-bottom-medium">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <g-image class="logo" src="~/assets/img/logo.png"></g-image>
          <h1 class="primary-heading">
            <span class="primary-heading--main">Đăng ký vay nhanh</span>
            <span class="primary-heading--sub"
              >Không cần thế chấp - Giải ngân trong ngày</span
            >
          </h1>
          <div class="row">
            <div class="col-lg-6">
              <g-image
                class="header-image"
                src="~/assets/img/header.png"
              ></g-image>
            </div>
            <div class="col-lg-6">
              <div class="regis-form">
                <div class="info">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <select class="form-control">
                      <option value="">Khu vực sống hiện tại</option>
                      <option value="">Hà Nội</option>
                      <option value="">Hồ Chí Minh</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <select class="form-control">
                      <option value="">-- Quận huyện --</option>
                      <option value="">Hà Nội</option>
                      <option value="">Hồ Chí Minh</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <select class="form-control">
                      <option value="">Chọn gói vay</option>
                      <option value="">Đăng ký (cà vẹt) xe máy chính chủ</option>
                      <option value="">Đăng ký (cà vẹt) xe máy không chính chủ</option>
                      <option value="">Đăng ký ô tô</option>
                      <option value="">Lương</option>
                    </select>
                  </div>
                </div>
                <button class="btn btn-primary">Đăng ký vay ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
