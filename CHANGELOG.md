# CHANGELOG

## X.X.X (unreleased)

* rename `layouts/simple_form_attachments/attachment_layout` to `simple_form_attachments/attachment_layout`
* when displaying errors do not include `hidden` fields so that the owner form can be saved

## 1.2.0

* CHANGE: ensures file input ids (and label) references are unique. [Issue #20](https://github.com/tomasc/simple_form_attachments/issues/20), thanks @asgerb

## 1.1.1

* FIX: use `to_simple_form_partial_path` in the input builder, [PR #19](https://github.com/tomasc/simple_form_attachments/pull/19), thanks @asgerb

## 1.1.0

* CHANGE: support jQuery UI `~> 6`, [PR #15](https://github.com/tomasc/simple_form_attachments/pull/15), thanks @asgerb

## 1.0.0

* CHANGE: css classes scoped in the `simple_form_attachments` namespace
* CHANGE: markup changed from `table` to `div` for more flexibility
